/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com", "via.placeholder.com"],
  },
  // Remove deprecated experimental options for Next.js 14
  typescript: {
    // Ignore TypeScript errors during build (optional)
    ignoreBuildErrors: false,
  },
};

module.exports = nextConfig;
