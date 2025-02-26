// // next.config.mjs
export default {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
// import type { NextConfig } from "next";
// const nextConfig: NextConfig = {
//   /* config options here */
// };
// export default nextConfig;
