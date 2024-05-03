/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/portfolio",
  images: {
    unoptimized: true,
  },
  webpack(config) {
    config.infrastructureLogging = { debug: /PackFileCache/ };
    return config;
  },
};

export default nextConfig;
