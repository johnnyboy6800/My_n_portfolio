import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  distDir: 'dist',
  basePath: isProd ?  'My_n_portfolio' : ''
};

export default nextConfig;
