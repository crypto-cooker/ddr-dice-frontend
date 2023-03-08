/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  images: {
    domains: ["res.cloudinary.com"],
  },
};
// https://neat-dry-patron.solana-mainnet.quiknode.pro/49a414d786b7497bca9f7f09df812df6d458c929
module.exports = nextConfig;
