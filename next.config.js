/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  optimizeFonts: true,
  images: {
    unoptimized: true,
  },
  trailingSlash: true, // Ensure static paths are correctç
};

module.exports = nextConfig;
