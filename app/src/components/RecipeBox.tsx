import { useMemo } from 'react';
import { useSuspenseQuery, skipToken } from '@apollo/client';
import { Link } from 'wouter';
import slugify from '@sindresorhus/slugify';
import { css } from '@linaria/core';
import { Input } from '@mantine/core';

import { graphql } from '../generated/gql';
import useSupabaseSession from '../hooks/useSupabaseSession';
import useRecipeSearch from '../hooks/useRecipeSearch';
import Site from './Site';
import PhotoCard from './PhotoCard';

const recipeItems = css`
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  li {
    list-style-type: none;
    width: calc(50% - 10px);

    a {
      color: black;
      text-decoration: none;

      h3 {
        margin-bottom: 8px;
      }

      &:hover {
        h3 {
          text-decoration: underline;
        }
      }
    }
  }
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
                    url
                    ingredients
                    steps
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
  const [searchResults, setSearchValue] = useRecipeSearch(recipes);

  return (
    <div>
      <Input placeholder="Search recipes" onChange={evt => setSearchValue(evt.target.value)} />
      <ol className={recipeItems}>
        {[...searchResults.reverse()].map(recipe => (
          <li key={recipe.nodeId}>
            <Link href={`/recipe/${recipe.id}/${slugs.get(recipe.id)}`}>
              <PhotoCard src={recipe.photo_url || undefined} />
              <h3>{recipe.title}</h3>
              {recipe.url && <Site url={recipe.url} />}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
};
