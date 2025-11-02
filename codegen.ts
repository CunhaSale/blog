
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://us-west-2.cdn.hygraph.com/content/cmcuh9qin00cl07v3spg0bvch/master",
  documents: "src/graphql/queries.ts",
  generates: {
    "src/graphql/generated/": {
      preset: "client",
      plugins: []
    }
  }
};

export default config;
