/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // to avoid Next.js image domain issues
  },
};

module.exports = nextConfig;
