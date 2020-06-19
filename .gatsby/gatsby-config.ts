import { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  plugins: [
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-s3',
      options: {
        bucketName: 'denni.dev',
      }
    }
  ]
};

export default config;
