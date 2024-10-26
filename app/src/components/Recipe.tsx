import { useMemo, useState } from 'react';
import { useSuspenseQuery } from '@apollo/client';
import { useParams } from 'wouter';
import { Image, Breadcrumbs, Text } from '@mantine/core';
import { styled } from '@linaria/react';

import { graphql } from '../generated/gql';
import NotFound from './NotFound';
import Site from './Site';
import Ingredients from './Ingredients';
import Instructions from './Instructions';
import SleepLock from './SleepLock';
import StyledLink from './StyledLink';

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
    recipeCollection(filter: { id: { eq: $id } }) {
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

export default () => {
  const { id } = useParams<{ id: string }>(); // slug isn't actually used, it's just for pretty urls
  const { data } = useSuspenseQuery(GET_RECIPE, {
    variables: {
      id,
    },
  });
  const [recipeScale, setRecipeScale] = useState(1.0);

  const recipe = useMemo(() => data.recipeCollection?.edges[0]?.node, [data]);

  if (!recipe) return <NotFound />;

  return (
    <>
      <Breadcrumbs mt="xs">
        <StyledLink to="/box">Recipe box</StyledLink>
        <Text>Recipe</Text>
      </Breadcrumbs>
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
    </>
  );
};
