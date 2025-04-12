import { NextConfig } from "next";
import { Configuration } from "webpack";
import dotenv from "dotenv";
import nextComposePlugins from "next-compose-plugins";
import headers from "./config/headers";
import plugins from "./config/plugins";

dotenv.config();

const nextConfig: NextConfig = nextComposePlugins([...plugins], {
  env: {
    ENVIRONMENT_NAME: "master",
  },
  poweredByHeader: false,
  compress: true,
  headers,
  images: {
    domains: ["images.ctfassets.net"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.eu.ctfassets.net",
        pathname: "/**",
      },
    ],
  },
  webpack(config: Configuration): Configuration {
    config.module?.rules?.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  
});

export default nextConfig;