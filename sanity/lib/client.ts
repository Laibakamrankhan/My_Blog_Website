import { createClient } from 'next-sanity'
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET, // Use environment variable
  apiVersion: '2023-05-03', // Use a recent date
  useCdn: false, // Set to true for cached data
});
