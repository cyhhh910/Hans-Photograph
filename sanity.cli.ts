import 'dotenv/config';
import { defineCliConfig } from 'sanity/cli';

const projectId = process.env.PUBLIC_SANITY_PROJECT_ID || process.env.SANITY_STUDIO_PROJECT_ID;
const dataset = process.env.PUBLIC_SANITY_DATASET || process.env.SANITY_STUDIO_DATASET || 'production';

if (!projectId) {
  throw new Error(
    'Missing Sanity projectId. Set PUBLIC_SANITY_PROJECT_ID in .env before running Sanity CLI commands.'
  );
}

export default defineCliConfig({
  api: {
    projectId,
    dataset
  }
});
