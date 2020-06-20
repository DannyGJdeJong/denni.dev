import { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  plugins: [
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-s3',
      options: {
        bucketName: 'denni.dev',
      }
    },
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('../src/components/Layout/Layout.tsx')
      }
    },
  ]
};

export default config;
