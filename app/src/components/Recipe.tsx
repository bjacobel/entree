import { useMemo, useState } from 'react';
import { useSuspenseQuery } from '@apollo/client';
import { Link, useParams } from 'wouter';
import { Image, Breadcrumbs } from '@mantine/core';
import { styled } from '@linaria/react';

import { graphql } from '../generated/gql';
import NotFound from './NotFound';
import Site from './Site';
import Ingredients from './Ingredients';
import Instructions from './Instructions';
import SleepLock from './SleepLock';

const SplitFlex = styled.div`
  display: flex;
  gap: 30px;

  .img {
    margin-top: 30px;
  }

  @media (max-width: 700px) {
    gap: 0;
    flex-direction: column-reverse;
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
        <Link href="/box">Recipe box</Link>
        <Link href="#">Recipe</Link>
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
