/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /** A high precision floating point value represented as a string */
  BigFloat: { input: string; output: string };
  /** An arbitrary size integer represented as a string */
  BigInt: { input: string; output: string };
  /** An opaque string using for tracking a position in results during pagination */
  Cursor: { input: any; output: any };
  /** A date wihout time information */
  Date: { input: string; output: string };
  /** A date and time */
  Datetime: { input: string; output: string };
  /** A Javascript Object Notation value serialized as a string */
  JSON: { input: string; output: string };
  /** Any type not handled by the type system */
  Opaque: { input: any; output: any };
  /** A time without date information */
  Time: { input: string; output: string };
  /** A universally unique identifier */
  UUID: { input: string; output: string };
};

/** Boolean expression comparing fields on type "BigFloat" */
export type BigFloatFilter = {
  eq?: InputMaybe<Scalars['BigFloat']['input']>;
  gt?: InputMaybe<Scalars['BigFloat']['input']>;
  gte?: InputMaybe<Scalars['BigFloat']['input']>;
  in?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigFloat']['input']>;
  lte?: InputMaybe<Scalars['BigFloat']['input']>;
  neq?: InputMaybe<Scalars['BigFloat']['input']>;
};

/** Boolean expression comparing fields on type "BigFloatList" */
export type BigFloatListFilter = {
  containedBy?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  contains?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  eq?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
};

/** Boolean expression comparing fields on type "BigInt" */
export type BigIntFilter = {
  eq?: InputMaybe<Scalars['BigInt']['input']>;
  gt?: InputMaybe<Scalars['BigInt']['input']>;
  gte?: InputMaybe<Scalars['BigInt']['input']>;
  in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigInt']['input']>;
  lte?: InputMaybe<Scalars['BigInt']['input']>;
  neq?: InputMaybe<Scalars['BigInt']['input']>;
};

/** Boolean expression comparing fields on type "BigIntList" */
export type BigIntListFilter = {
  containedBy?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  eq?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

/** Boolean expression comparing fields on type "Boolean" */
export type BooleanFilter = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  is?: InputMaybe<FilterIs>;
};

/** Boolean expression comparing fields on type "BooleanList" */
export type BooleanListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  contains?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  eq?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression comparing fields on type "Date" */
export type DateFilter = {
  eq?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<Scalars['Date']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  neq?: InputMaybe<Scalars['Date']['input']>;
};

/** Boolean expression comparing fields on type "DateList" */
export type DateListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Date']['input']>>;
  contains?: InputMaybe<Array<Scalars['Date']['input']>>;
  eq?: InputMaybe<Array<Scalars['Date']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Date']['input']>>;
};

/** Boolean expression comparing fields on type "Datetime" */
export type DatetimeFilter = {
  eq?: InputMaybe<Scalars['Datetime']['input']>;
  gt?: InputMaybe<Scalars['Datetime']['input']>;
  gte?: InputMaybe<Scalars['Datetime']['input']>;
  in?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Datetime']['input']>;
  lte?: InputMaybe<Scalars['Datetime']['input']>;
  neq?: InputMaybe<Scalars['Datetime']['input']>;
};

/** Boolean expression comparing fields on type "DatetimeList" */
export type DatetimeListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  contains?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  eq?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Datetime']['input']>>;
};

export enum FilterIs {
  NotNull = 'NOT_NULL',
  Null = 'NULL',
}

/** Boolean expression comparing fields on type "Float" */
export type FloatFilter = {
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  neq?: InputMaybe<Scalars['Float']['input']>;
};

/** Boolean expression comparing fields on type "FloatList" */
export type FloatListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Float']['input']>>;
  contains?: InputMaybe<Array<Scalars['Float']['input']>>;
  eq?: InputMaybe<Array<Scalars['Float']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Float']['input']>>;
};

/** Boolean expression comparing fields on type "ID" */
export type IdFilter = {
  eq?: InputMaybe<Scalars['ID']['input']>;
};

/** Boolean expression comparing fields on type "Int" */
export type IntFilter = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  neq?: InputMaybe<Scalars['Int']['input']>;
};

/** Boolean expression comparing fields on type "IntList" */
export type IntListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Int']['input']>>;
  contains?: InputMaybe<Array<Scalars['Int']['input']>>;
  eq?: InputMaybe<Array<Scalars['Int']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** The root type for creating and mutating data */
export type Mutation = {
  __typename?: 'Mutation';
  /** Deletes zero or more records from the `recipe` collection */
  deleteFromrecipeCollection: RecipeDeleteResponse;
  /** Deletes zero or more records from the `recipe_box` collection */
  deleteFromrecipe_boxCollection: Recipe_BoxDeleteResponse;
  /** Deletes zero or more records from the `recipe_box_owner` collection */
  deleteFromrecipe_box_ownerCollection: Recipe_Box_OwnerDeleteResponse;
  /** Adds one or more `recipe` records to the collection */
  insertIntorecipeCollection?: Maybe<RecipeInsertResponse>;
  /** Adds one or more `recipe_box` records to the collection */
  insertIntorecipe_boxCollection?: Maybe<Recipe_BoxInsertResponse>;
  /** Adds one or more `recipe_box_owner` records to the collection */
  insertIntorecipe_box_ownerCollection?: Maybe<Recipe_Box_OwnerInsertResponse>;
  /** Updates zero or more records in the `recipe` collection */
  updaterecipeCollection: RecipeUpdateResponse;
  /** Updates zero or more records in the `recipe_box` collection */
  updaterecipe_boxCollection: Recipe_BoxUpdateResponse;
  /** Updates zero or more records in the `recipe_box_owner` collection */
  updaterecipe_box_ownerCollection: Recipe_Box_OwnerUpdateResponse;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromrecipeCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<RecipeFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromrecipe_BoxCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Recipe_BoxFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromrecipe_Box_OwnerCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Recipe_Box_OwnerFilter>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntorecipeCollectionArgs = {
  objects: Array<RecipeInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntorecipe_BoxCollectionArgs = {
  objects: Array<Recipe_BoxInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntorecipe_Box_OwnerCollectionArgs = {
  objects: Array<Recipe_Box_OwnerInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationUpdaterecipeCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<RecipeFilter>;
  set: RecipeUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdaterecipe_BoxCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Recipe_BoxFilter>;
  set: Recipe_BoxUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdaterecipe_Box_OwnerCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Recipe_Box_OwnerFilter>;
  set: Recipe_Box_OwnerUpdateInput;
};

export type Node = {
  /** Retrieves a record by `ID` */
  nodeId: Scalars['ID']['output'];
};

/** Boolean expression comparing fields on type "Opaque" */
export type OpaqueFilter = {
  eq?: InputMaybe<Scalars['Opaque']['input']>;
  is?: InputMaybe<FilterIs>;
};

/** Defines a per-field sorting order */
export enum OrderByDirection {
  /** Ascending order, nulls first */
  AscNullsFirst = 'AscNullsFirst',
  /** Ascending order, nulls last */
  AscNullsLast = 'AscNullsLast',
  /** Descending order, nulls first */
  DescNullsFirst = 'DescNullsFirst',
  /** Descending order, nulls last */
  DescNullsLast = 'DescNullsLast',
}

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

/** The root type for querying data */
export type Query = {
  __typename?: 'Query';
  /** Retrieve a record by its `ID` */
  node?: Maybe<Node>;
  /** A pagable collection of type `recipe` */
  recipeCollection?: Maybe<RecipeConnection>;
  /** A pagable collection of type `recipe_box` */
  recipe_boxCollection?: Maybe<Recipe_BoxConnection>;
  /** A pagable collection of type `recipe_box_owner` */
  recipe_box_ownerCollection?: Maybe<Recipe_Box_OwnerConnection>;
};

/** The root type for querying data */
export type QueryNodeArgs = {
  nodeId: Scalars['ID']['input'];
};

/** The root type for querying data */
export type QueryRecipeCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<RecipeFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RecipeOrderBy>>;
};

/** The root type for querying data */
export type QueryRecipe_BoxCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Recipe_BoxFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Recipe_BoxOrderBy>>;
};

/** The root type for querying data */
export type QueryRecipe_Box_OwnerCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Recipe_Box_OwnerFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Recipe_Box_OwnerOrderBy>>;
};

/** Boolean expression comparing fields on type "String" */
export type StringFilter = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  iregex?: InputMaybe<Scalars['String']['input']>;
  is?: InputMaybe<FilterIs>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  regex?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression comparing fields on type "StringList" */
export type StringListFilter = {
  containedBy?: InputMaybe<Array<Scalars['String']['input']>>;
  contains?: InputMaybe<Array<Scalars['String']['input']>>;
  eq?: InputMaybe<Array<Scalars['String']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** Boolean expression comparing fields on type "Time" */
export type TimeFilter = {
  eq?: InputMaybe<Scalars['Time']['input']>;
  gt?: InputMaybe<Scalars['Time']['input']>;
  gte?: InputMaybe<Scalars['Time']['input']>;
  in?: InputMaybe<Array<Scalars['Time']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Time']['input']>;
  lte?: InputMaybe<Scalars['Time']['input']>;
  neq?: InputMaybe<Scalars['Time']['input']>;
};

/** Boolean expression comparing fields on type "TimeList" */
export type TimeListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Time']['input']>>;
  contains?: InputMaybe<Array<Scalars['Time']['input']>>;
  eq?: InputMaybe<Array<Scalars['Time']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Time']['input']>>;
};

/** Boolean expression comparing fields on type "UUID" */
export type UuidFilter = {
  eq?: InputMaybe<Scalars['UUID']['input']>;
  in?: InputMaybe<Array<Scalars['UUID']['input']>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Scalars['UUID']['input']>;
};

/** Boolean expression comparing fields on type "UUIDList" */
export type UuidListFilter = {
  containedBy?: InputMaybe<Array<Scalars['UUID']['input']>>;
  contains?: InputMaybe<Array<Scalars['UUID']['input']>>;
  eq?: InputMaybe<Array<Scalars['UUID']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['UUID']['input']>>;
};

export type Recipe = Node & {
  __typename?: 'recipe';
  created_at: Scalars['Datetime']['output'];
  created_by?: Maybe<Scalars['UUID']['output']>;
  id: Scalars['BigInt']['output'];
  ingredients: Array<Maybe<Scalars['String']['output']>>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  photo_url?: Maybe<Scalars['String']['output']>;
  recipe_box?: Maybe<Recipe_Box>;
  steps: Array<Maybe<Scalars['String']['output']>>;
  title: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['Datetime']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type RecipeConnection = {
  __typename?: 'recipeConnection';
  edges: Array<RecipeEdge>;
  pageInfo: PageInfo;
};

export type RecipeDeleteResponse = {
  __typename?: 'recipeDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Recipe>;
};

export type RecipeEdge = {
  __typename?: 'recipeEdge';
  cursor: Scalars['String']['output'];
  node: Recipe;
};

export type RecipeFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<RecipeFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  created_by?: InputMaybe<UuidFilter>;
  id?: InputMaybe<BigIntFilter>;
  ingredients?: InputMaybe<StringListFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<RecipeFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<RecipeFilter>>;
  photo_url?: InputMaybe<StringFilter>;
  recipe_box?: InputMaybe<BigIntFilter>;
  steps?: InputMaybe<StringListFilter>;
  title?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
  url?: InputMaybe<StringFilter>;
};

export type RecipeInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  created_by?: InputMaybe<Scalars['UUID']['input']>;
  ingredients?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  photo_url?: InputMaybe<Scalars['String']['input']>;
  recipe_box?: InputMaybe<Scalars['BigInt']['input']>;
  steps?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type RecipeInsertResponse = {
  __typename?: 'recipeInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Recipe>;
};

export type RecipeOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  created_by?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  photo_url?: InputMaybe<OrderByDirection>;
  recipe_box?: InputMaybe<OrderByDirection>;
  title?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
  url?: InputMaybe<OrderByDirection>;
};

export type RecipeUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  created_by?: InputMaybe<Scalars['UUID']['input']>;
  ingredients?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  photo_url?: InputMaybe<Scalars['String']['input']>;
  recipe_box?: InputMaybe<Scalars['BigInt']['input']>;
  steps?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type RecipeUpdateResponse = {
  __typename?: 'recipeUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Recipe>;
};

export type Recipe_Box = Node & {
  __typename?: 'recipe_box';
  created_at: Scalars['Datetime']['output'];
  id: Scalars['BigInt']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  recipeCollection?: Maybe<RecipeConnection>;
  recipe_box_ownerCollection?: Maybe<Recipe_Box_OwnerConnection>;
};

export type Recipe_BoxRecipeCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<RecipeFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RecipeOrderBy>>;
};

export type Recipe_BoxRecipe_Box_OwnerCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Recipe_Box_OwnerFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Recipe_Box_OwnerOrderBy>>;
};

export type Recipe_BoxConnection = {
  __typename?: 'recipe_boxConnection';
  edges: Array<Recipe_BoxEdge>;
  pageInfo: PageInfo;
};

export type Recipe_BoxDeleteResponse = {
  __typename?: 'recipe_boxDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Recipe_Box>;
};

export type Recipe_BoxEdge = {
  __typename?: 'recipe_boxEdge';
  cursor: Scalars['String']['output'];
  node: Recipe_Box;
};

export type Recipe_BoxFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Recipe_BoxFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Recipe_BoxFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Recipe_BoxFilter>>;
};

export type Recipe_BoxInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Recipe_BoxInsertResponse = {
  __typename?: 'recipe_boxInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Recipe_Box>;
};

export type Recipe_BoxOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
};

export type Recipe_BoxUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Recipe_BoxUpdateResponse = {
  __typename?: 'recipe_boxUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Recipe_Box>;
};

export type Recipe_Box_Owner = Node & {
  __typename?: 'recipe_box_owner';
  created_at: Scalars['Datetime']['output'];
  id: Scalars['BigInt']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  recipe_box?: Maybe<Recipe_Box>;
  user?: Maybe<Scalars['UUID']['output']>;
};

export type Recipe_Box_OwnerConnection = {
  __typename?: 'recipe_box_ownerConnection';
  edges: Array<Recipe_Box_OwnerEdge>;
  pageInfo: PageInfo;
};

export type Recipe_Box_OwnerDeleteResponse = {
  __typename?: 'recipe_box_ownerDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Recipe_Box_Owner>;
};

export type Recipe_Box_OwnerEdge = {
  __typename?: 'recipe_box_ownerEdge';
  cursor: Scalars['String']['output'];
  node: Recipe_Box_Owner;
};

export type Recipe_Box_OwnerFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Recipe_Box_OwnerFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Recipe_Box_OwnerFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Recipe_Box_OwnerFilter>>;
  recipe_box?: InputMaybe<BigIntFilter>;
  user?: InputMaybe<UuidFilter>;
};

export type Recipe_Box_OwnerInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  recipe_box?: InputMaybe<Scalars['BigInt']['input']>;
  user?: InputMaybe<Scalars['UUID']['input']>;
};

export type Recipe_Box_OwnerInsertResponse = {
  __typename?: 'recipe_box_ownerInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Recipe_Box_Owner>;
};

export type Recipe_Box_OwnerOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  recipe_box?: InputMaybe<OrderByDirection>;
  user?: InputMaybe<OrderByDirection>;
};

export type Recipe_Box_OwnerUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  recipe_box?: InputMaybe<Scalars['BigInt']['input']>;
  user?: InputMaybe<Scalars['UUID']['input']>;
};

export type Recipe_Box_OwnerUpdateResponse = {
  __typename?: 'recipe_box_ownerUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Recipe_Box_Owner>;
};

export type RecipeQueryVariables = Exact<{
  id?: InputMaybe<Scalars['BigInt']['input']>;
}>;

export type RecipeQuery = {
  __typename: 'Query';
  recipeCollection?: {
    __typename: 'recipeConnection';
    edges: Array<{
      __typename: 'recipeEdge';
      node: {
        __typename: 'recipe';
        title: string;
        steps: Array<string | null>;
        ingredients: Array<string | null>;
        created_at: string;
        updated_at?: string | null;
        photo_url?: string | null;
        url?: string | null;
        created_by?: string | null;
      };
    }>;
  } | null;
};

export type MyRecipesQueryVariables = Exact<{
  cursor?: InputMaybe<Scalars['Cursor']['input']>;
  user: Scalars['UUID']['input'];
}>;

export type MyRecipesQuery = {
  __typename: 'Query';
  recipe_box_ownerCollection?: {
    __typename: 'recipe_box_ownerConnection';
    edges: Array<{
      __typename: 'recipe_box_ownerEdge';
      node: {
        __typename: 'recipe_box_owner';
        recipe_box?: {
          __typename: 'recipe_box';
          recipeCollection?: {
            __typename: 'recipeConnection';
            pageInfo: { __typename: 'PageInfo'; endCursor?: string | null; hasNextPage: boolean };
            edges: Array<{
              __typename: 'recipeEdge';
              node: {
                __typename: 'recipe';
                id: string;
                title: string;
                created_at: string;
                updated_at?: string | null;
                photo_url?: string | null;
                nodeId: string;
              };
            }>;
          } | null;
        } | null;
      };
    }>;
  } | null;
};

export const RecipeDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Recipe' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'BigInt' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'recipeCollection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'id' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                            {
                              kind: 'InlineFragment',
                              typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'recipe' } },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'steps' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'ingredients' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'updated_at' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'photo_url' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'created_by' } },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<RecipeQuery, RecipeQueryVariables>;
export const MyRecipesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'MyRecipes' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'cursor' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Cursor' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'user' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'UUID' } } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'recipe_box_ownerCollection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'user' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: { kind: 'Variable', name: { kind: 'Name', value: 'user' } },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'edges' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'node' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'recipe_box' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'recipeCollection' },
                                    arguments: [
                                      {
                                        kind: 'Argument',
                                        name: { kind: 'Name', value: 'first' },
                                        value: { kind: 'IntValue', value: '10' },
                                      },
                                      {
                                        kind: 'Argument',
                                        name: { kind: 'Name', value: 'after' },
                                        value: { kind: 'Variable', name: { kind: 'Name', value: 'cursor' } },
                                      },
                                    ],
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'pageInfo' },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                                              { kind: 'Field', name: { kind: 'Name', value: 'endCursor' } },
                                              { kind: 'Field', name: { kind: 'Name', value: 'hasNextPage' } },
                                            ],
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'edges' },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                                              {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'node' },
                                                selectionSet: {
                                                  kind: 'SelectionSet',
                                                  selections: [
                                                    { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                                                    { kind: 'Field', name: { kind: 'Name', value: 'nodeId' } },
                                                    {
                                                      kind: 'InlineFragment',
                                                      typeCondition: {
                                                        kind: 'NamedType',
                                                        name: { kind: 'Name', value: 'recipe' },
                                                      },
                                                      selectionSet: {
                                                        kind: 'SelectionSet',
                                                        selections: [
                                                          {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: '__typename' },
                                                          },
                                                          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                                          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                                                          {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'created_at' },
                                                          },
                                                          {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'updated_at' },
                                                          },
                                                          { kind: 'Field', name: { kind: 'Name', value: 'photo_url' } },
                                                        ],
                                                      },
                                                    },
                                                  ],
                                                },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MyRecipesQuery, MyRecipesQueryVariables>;
