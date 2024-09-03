import { useMemo } from 'react';
import { styled } from '@linaria/react';
import { useSuspenseQuery, skipToken } from '@apollo/client';
import { Link } from 'wouter';
import slugify from '@sindresorhus/slugify';

import { center, openSans } from '../stylesheets/shared.css';
import { lightgrey } from '../stylesheets/colors.css';
import { graphql } from '../generated/gql';
import useSupabaseSession from '../hooks/useSupabaseSession';

const Header = styled.h3`
  ${center}
  ${openSans}
  ${lightgrey}
  font-style: italic;
`;

const GET_MY_RECIPE_BOX_RECIPES = graphql(/* GraphQL */ `
  query MyRecipes($cursor: Cursor, $user: UUID!) {
    recipe_box_ownerCollection(filter: { user: { eq: $user } }) {
      edges {
        node {
          recipe_box {
            recipeCollection(first: 10, after: $cursor) {
              pageInfo {
                endCursor
                hasNextPage
              }
              edges {
                node {
                  nodeId
                  ... on recipe {
                    id
                    title
                    created_at
                    updated_at
                    photo_url
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`);

export default () => {
  const { session } = useSupabaseSession();
  const { data } = useSuspenseQuery(
    GET_MY_RECIPE_BOX_RECIPES,
    session
      ? {
          variables: { user: session.user.id },
        }
      : skipToken,
  );

  const recipes = useMemo(
    () =>
      data?.recipe_box_ownerCollection?.edges.flatMap(
        box => box.node.recipe_box?.recipeCollection?.edges.map(({ node }) => node) || [],
      ) || [],
    [data],
  );

  const slugs = useMemo(() => new Map(recipes.map(recipe => [recipe.id, slugify(recipe.title)])), [recipes]);

  return (
    <div>
      <Header>Welcome to your recipe box</Header>
      <ol>
        {recipes.map(recipe => (
          <li key={recipe.nodeId}>
            <Link href={`/recipe/${recipe.id}/${slugs.get(recipe.id)}`}>{recipe.title}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
};
