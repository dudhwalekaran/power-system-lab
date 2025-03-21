/** @type {import('next').NextConfig} */
const nextConfig = {
    /**api: {
      bodyParser: false, // Disable default body parser for file uploads
    },**/
    output: "export",
    eslint: {
      ignoreDuringBuilds: true, // This will disable ESLint during builds
    },
    trailingSlash: false,
  };
  
  export default nextConfig;
  
