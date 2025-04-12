declare module 'next-compose-plugins' {
    import { NextConfig } from 'next';
  
    type Plugin = (nextConfig: NextConfig) => NextConfig;
  
    function withPlugins(plugins: Plugin[], nextConfig?: NextConfig): NextConfig;
  
    export default withPlugins;
  }
  