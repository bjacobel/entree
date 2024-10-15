import { useMemo, useState } from 'react';
import { useSuspenseQuery } from '@apollo/client';
import { useParams } from 'wouter';
import { Image, Breadcrumbs, Anchor } from '@mantine/core';
import { css } from '@linaria/core';

import { graphql } from '../generated/gql';
import NotFound from './NotFound';
import Ingredients from './Ingredients';

const unpaddedList = css`
  padding-left: 15px;
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
        <Anchor href="/box">Recipe box</Anchor>
        <Anchor href="#">Recipe</Anchor>
      </Breadcrumbs>
      <h2>{recipe.title}</h2>
      {recipe.photo_url && <Image radius="sm" maw={400} src={recipe.photo_url} />}
      <Ingredients ingredients={recipe.ingredients} scale={recipeScale} setScale={setRecipeScale} />
      <h3>Instructions</h3>
      <ol className={unpaddedList}>
        {recipe.steps.map(step => (
          <li key={step}>{step}</li>
        ))}
      </ol>
    </>
  );
};
