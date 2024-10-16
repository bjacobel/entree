import { ApolloClient, createHttpLink, defaultDataIdFromObject, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { relayStylePagination } from '@apollo/client/utilities';
import { SupabaseClient } from '@supabase/supabase-js';

import {
  IS_PROD,
  SUPABASE_ANON_KEY,
  SUPABASE_LOCAL_ANON_KEY,
  SUPABASE_LOCAL_PROJECT_URL,
  SUPABASE_PROJECT_URL,
} from '../constants';

const cache = new InMemoryCache({
  dataIdFromObject(responseObject) {
    if ('nodeId' in responseObject) {
      return `${responseObject.nodeId}`;
    }

    return defaultDataIdFromObject(responseObject);
  },
  possibleTypes: { Node: ['recipe', 'recipe_box', 'recipe_box_owner'] }, // optional, but useful to specify supertype-subtype relationships
  typePolicies: {
    Query: {
      fields: {
        todosCollection: relayStylePagination(), // example of paginating a collection
        node: {
          read(_, { args, toReference }) {
            const ref = toReference({
              nodeId: args?.nodeId,
            });

            return ref;
          },
        },
      },
    },
  },
});

const httpLink = createHttpLink({
  uri: `${IS_PROD ? SUPABASE_PROJECT_URL : SUPABASE_LOCAL_PROJECT_URL}/graphql/v1`,
});

const authLink = (supabase: SupabaseClient) =>
  setContext(async (_, { headers }) => {
    const token = (await supabase.auth.getSession()).data.session?.access_token;

    return {
      headers: {
        ...headers,
        Authorization: token ? `Bearer ${token}` : '',
        apikey: IS_PROD ? SUPABASE_ANON_KEY : SUPABASE_LOCAL_ANON_KEY,
      },
    };
  });

export const createSupabaseApolloClient = (supabase: SupabaseClient) =>
  new ApolloClient({
    link: authLink(supabase).concat(httpLink),
    cache,
  });
