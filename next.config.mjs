/** @type {import('next').NextConfig} */
const nextConfig = {
  // 根據環境決定是否使用靜態導出
  // 在 Vercel 上不使用靜態導出
  output: process.env.VERCEL ? undefined : 'export',
  
  // 只在非 Vercel 環境中設置 basePath
  basePath: process.env.VERCEL ? '' : (process.env.NODE_ENV === 'production' ? '/binge-eating-project' : ''),
  
  // 只在非 Vercel 環境中設置 assetPrefix
  assetPrefix: process.env.VERCEL ? '' : (process.env.NODE_ENV === 'production' ? '/binge-eating-project/' : ''),
  
  // 調整圖像配置
  images: {
    unoptimized: true,
  },

  // 確保所有靜態資源都能正確載入
  experimental: {
    optimizePackageImports: ['aos', 'font-awesome'],
  },

  // 禁用 ESLint 檢查以排除警告
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
