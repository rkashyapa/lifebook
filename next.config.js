/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2,
  },
  // This setting helps with hydration mismatches caused by browser extensions
  experimental: {
    // This helps with hydration mismatches
    optimizePackageImports: ['react', 'react-dom'],
  },
  eslint: {
    // Completely disable ESLint during development and builds
    ignoreDuringBuilds: true,
    dirs: [], // Empty array means no directories will be linted
  },
};

module.exports = nextConfig; 