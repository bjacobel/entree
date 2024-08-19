import 'dotenv/config';
import type { CodegenConfig } from '@graphql-codegen/cli';
import { addTypenameSelectionDocumentTransform } from '@graphql-codegen/client-preset';

const config: CodegenConfig = {
  schema: [
    {
      'https://xqtjushglhfclyrligot.supabase.co/graphql/v1': {
        headers: {
          apikey: process.env.SUPABASE_SERVICE_ROLE_API_KEY as string,
        },
      },
    },
  ],
  documents: 'app/src/**/*.tsx',
  overwrite: true,
  ignoreNoDocuments: true,
  generates: {
    'app/src/generated/': {
      preset: 'client',
      documentTransforms: [addTypenameSelectionDocumentTransform],
      config: {
        scalars: {
          UUID: 'string',
          Date: 'string',
          Time: 'string',
          Datetime: 'string',
          JSON: 'string',
          BigInt: 'string',
          BigFloat: 'string',
          Opaque: 'any',
        },
      },
    },
  },
  hooks: {
    afterAllFileWrite: ['yarn run prettier --write app/src/generated/* || true'],
  },
};

export default config;
