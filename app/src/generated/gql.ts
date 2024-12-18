/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  '\n  query Recipe($id: BigInt) {\n    recipeCollection(filter: { id: { eq: $id }, deleted: { eq: false } }) {\n      edges {\n        node {\n          ... on recipe {\n            title\n            steps\n            ingredients\n            created_at\n            updated_at\n            photo_url\n            url\n            created_by\n          }\n        }\n      }\n    }\n  }\n':
    types.RecipeDocument,
  '\n  mutation deleteRecipe($id: BigInt!) {\n    updaterecipeCollection(set: { deleted: true }, filter: { id: { eq: $id } }, atMost: 1) {\n      records {\n        id\n      }\n    }\n  }\n':
    types.DeleteRecipeDocument,
  '\n  query MyRecipes($cursor: Cursor, $user: UUID!) {\n    recipe_box_ownerCollection(filter: { user: { eq: $user } }) {\n      edges {\n        node {\n          recipe_box {\n            recipeCollection(first: 10, after: $cursor, filter: { deleted: { eq: false } }) {\n              pageInfo {\n                endCursor\n                hasNextPage\n              }\n              edges {\n                node {\n                  nodeId\n                  ... on recipe {\n                    id\n                    title\n                    created_at\n                    updated_at\n                    photo_url\n                    url\n                    ingredients\n                    steps\n                    deleted\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n':
    types.MyRecipesDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query Recipe($id: BigInt) {\n    recipeCollection(filter: { id: { eq: $id }, deleted: { eq: false } }) {\n      edges {\n        node {\n          ... on recipe {\n            title\n            steps\n            ingredients\n            created_at\n            updated_at\n            photo_url\n            url\n            created_by\n          }\n        }\n      }\n    }\n  }\n',
): (typeof documents)['\n  query Recipe($id: BigInt) {\n    recipeCollection(filter: { id: { eq: $id }, deleted: { eq: false } }) {\n      edges {\n        node {\n          ... on recipe {\n            title\n            steps\n            ingredients\n            created_at\n            updated_at\n            photo_url\n            url\n            created_by\n          }\n        }\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation deleteRecipe($id: BigInt!) {\n    updaterecipeCollection(set: { deleted: true }, filter: { id: { eq: $id } }, atMost: 1) {\n      records {\n        id\n      }\n    }\n  }\n',
): (typeof documents)['\n  mutation deleteRecipe($id: BigInt!) {\n    updaterecipeCollection(set: { deleted: true }, filter: { id: { eq: $id } }, atMost: 1) {\n      records {\n        id\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query MyRecipes($cursor: Cursor, $user: UUID!) {\n    recipe_box_ownerCollection(filter: { user: { eq: $user } }) {\n      edges {\n        node {\n          recipe_box {\n            recipeCollection(first: 10, after: $cursor, filter: { deleted: { eq: false } }) {\n              pageInfo {\n                endCursor\n                hasNextPage\n              }\n              edges {\n                node {\n                  nodeId\n                  ... on recipe {\n                    id\n                    title\n                    created_at\n                    updated_at\n                    photo_url\n                    url\n                    ingredients\n                    steps\n                    deleted\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n',
): (typeof documents)['\n  query MyRecipes($cursor: Cursor, $user: UUID!) {\n    recipe_box_ownerCollection(filter: { user: { eq: $user } }) {\n      edges {\n        node {\n          recipe_box {\n            recipeCollection(first: 10, after: $cursor, filter: { deleted: { eq: false } }) {\n              pageInfo {\n                endCursor\n                hasNextPage\n              }\n              edges {\n                node {\n                  nodeId\n                  ... on recipe {\n                    id\n                    title\n                    created_at\n                    updated_at\n                    photo_url\n                    url\n                    ingredients\n                    steps\n                    deleted\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n'];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
