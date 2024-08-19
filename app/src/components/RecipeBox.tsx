import { styled } from '@linaria/react';
import { useSuspenseQuery, skipToken } from '@apollo/client';

import { center, openSans } from '../stylesheets/shared.css';
import { lightgrey } from '../stylesheets/colors.css';
import StyledLink from './StyledLink';
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
                  title
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
  const { session, loading: sessionLoading } = useSupabaseSession();
  const { data } = useSuspenseQuery(
    GET_MY_RECIPE_BOX_RECIPES,
    session
      ? {
          variables: { user: session.user.id },
        }
      : skipToken,
  );

  if (sessionLoading) return 'Loading...';

  return (
    <div>
      {JSON.stringify(data, null, 2)}
      <Header>Welcome to your recipe box</Header>
      <StyledLink to="/">Home</StyledLink>
    </div>
  );
};
