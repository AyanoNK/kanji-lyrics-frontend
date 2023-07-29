/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BACKEND_SERVER_HOST: process.env.BACKEND_SERVER_HOST,
  },
};

module.exports = nextConfig;
