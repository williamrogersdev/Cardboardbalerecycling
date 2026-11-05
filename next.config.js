/** @type {import('next').NextConfig} */
const nextConfig = {
  // PostHog loads through this site's own domain (1DB site_analytics.md)
  async rewrites() {
    return [
      { source: "/ingest/static/:path*", destination: "https://us-assets.i.posthog.com/static/:path*" },
      { source: "/ingest/array/:path*", destination: "https://us-assets.i.posthog.com/array/:path*" },
      { source: "/ingest/:path*", destination: "https://us.i.posthog.com/:path*" },
    ]
  },
  // PostHog's API paths end in '/'; the default redirect would break them
  skipTrailingSlashRedirect: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
};

module.exports = nextConfig;
