import { useMemo, useState } from 'react';
import { useMutation, useSuspenseQuery } from '@apollo/client';
import { useLocation, useParams } from 'wouter';
import { Image, Breadcrumbs, Text, Button, Flex, Modal } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { styled } from '@linaria/react';

import { graphql } from '../generated/gql';
import NotFound from './NotFound';
import Site from './Site';
import Ingredients from './Ingredients';
import Instructions from './Instructions';
import SleepLock from './SleepLock';
import StyledLink from './StyledLink';
import { GET_MY_RECIPE_BOX_RECIPES } from './RecipeBox';

const SplitFlex = styled.div`
  display: flex;
  gap: 30px;

  > div {
    width: 50%;
  }

  .img {
    margin-top: 30px;

    img {
      max-height: 500px;
    }
  }

  @media (max-width: 700px) {
    gap: 0;
    flex-direction: column-reverse;

    > div {
      width: 100%;
    }
  }
`;

const GET_RECIPE = graphql(/* GraphQL */ `
  query Recipe($id: BigInt) {
    recipeCollection(filter: { id: { eq: $id }, deleted: { eq: false } }) {
      edges {
        node {
          ... on recipe {
            title
            steps
            ingredients
            created_at
            updated_at
            photo_url
            url
            created_by
          }
        }
      }
    }
  }
`);

const REMOVE_RECIPE_FROM_BOX = graphql(/* GraphQL */ `
  mutation deleteRecipe($id: BigInt!) {
    updaterecipeCollection(set: { deleted: true }, filter: { id: { eq: $id } }, atMost: 1) {
      records {
        id
      }
    }
  }
`);

export default () => {
  const [__location, setLocation] = useLocation();
  const { id } = useParams<{ id: string }>(); // slug isn't actually used, it's just for pretty urls

  const [showRemoveConfirmation, setShowRemoveConfirmation] = useState(false);
  const [recipeScale, setRecipeScale] = useState(1.0);

  const { data } = useSuspenseQuery(GET_RECIPE, {
    variables: {
      id,
    },
  });
  const [removeFromBox, { loading: removalLoading }] = useMutation(REMOVE_RECIPE_FROM_BOX, {
    onError(error) {
      notifications.show({
        title: 'Error',
        color: 'red',
        message: error.message,
      });
    },
    onCompleted() {
      setShowRemoveConfirmation(false);
      setLocation('/box');
    },
    refetchQueries: [GET_MY_RECIPE_BOX_RECIPES],
  });

  const recipe = useMemo(() => data.recipeCollection?.edges[0]?.node, [data]);

  if (!recipe) return <NotFound />;

  return (
    <>
      <Flex justify="space-between">
        <Breadcrumbs mt="xs">
          <StyledLink to="/box">Recipe box</StyledLink>
          <Text>Recipe</Text>
        </Breadcrumbs>
        <Button variant="transparent" color="red" px={0} onClick={() => setShowRemoveConfirmation(true)}>
          Remove from box
        </Button>
      </Flex>
      <SplitFlex>
        <div>
          <h2>{recipe.title}</h2>
          <SleepLock />
          <Ingredients ingredients={recipe.ingredients} scale={recipeScale} setScale={setRecipeScale} />
        </div>
        <div className="img">
          {recipe.photo_url && <Image radius="sm" src={recipe.photo_url} />}
          {recipe.url && <Site linked url={recipe.url} />}
        </div>
      </SplitFlex>
      <Instructions steps={recipe.steps} />
      <Modal opened={showRemoveConfirmation} onClose={() => setShowRemoveConfirmation(false)}>
        <Text mb={20}>
          Remove <strong>{recipe.title}</strong> from your box permanently?
        </Text>
        <Flex justify="end">
          <Button
            color="red"
            loading={removalLoading}
            onClick={() =>
              removeFromBox({
                variables: { id },
              })
            }
          >
            Remove
          </Button>
        </Flex>
      </Modal>
    </>
  );
};
