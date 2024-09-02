import { useMemo } from 'react';
import { useSuspenseQuery } from '@apollo/client';
import { useParams } from 'wouter';

import { graphql } from '../generated/gql';
import NotFound from './NotFound';

const GET_RECIPE = graphql(/* GraphQL */ `
  query Recipe($id: BigInt) {
    recipeCollection(filter: { id: { eq: $id } }) {
      edges {
        node {
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
`);

export default () => {
  const { id } = useParams<{ id: string }>(); // slug isn't actually used, it's just for pretty urls
  const { data } = useSuspenseQuery(GET_RECIPE, {
    variables: {
      id,
    },
  });

  const recipe = useMemo(() => data.recipeCollection?.edges[0]?.node, [data]);

  if (!recipe) return NotFound;

  return (
    <div>
      <h2>{recipe.title}</h2>
    </div>
  );
};
