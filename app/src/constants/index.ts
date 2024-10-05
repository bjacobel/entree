export const IS_PROD = process.env.NODE_ENV === 'production';
export const SHOW_DEV_TOOLS = !IS_PROD;
export const SHOW_STACK = !IS_PROD;
export const TRACK_ANALYTICS = IS_PROD;
export const LOG_ERRORS = IS_PROD;
export const DATA = {
  text: 'an opinionated skeleton to quickly set up a new React app',
};
export const RAVEN_ENDPT = projectConfig.RavenDSN;
export const GA_ID = projectConfig.GAProperty;
export const RELEASE = process.env.GITHUB_SHA;
export const SW_FILENAME = 'service-worker.js';

export const SUPABASE_PROJECT_URL = 'https://xqtjushglhfclyrligot.supabase.co';
export const SUPABASE_LOCAL_PROJECT_URL = `http://${window.location.hostname}:54321`;
// This key is safe to use in a browser if you have enabled Row Level Security for your tables and configured policies.
export const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhxdGp1c2hnbGhmY2x5cmxpZ290Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQwMDIxODUsImV4cCI6MjAzOTU3ODE4NX0.gu3Y-rGu_AaA5hN-1cDNQFCBxJBZTAqqi-gwt_b8ZjI';
export const SUPABASE_LOCAL_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0';
