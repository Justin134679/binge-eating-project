/** @type {import('next').NextConfig} */
const nextConfig = {
  // 使用靜態導出模式，這樣可以生成靜態HTML文件
  output: 'export',
  
  // 設定基礎路徑為空，適用於Vercel環境
  basePath: '',
  
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

  // 移除不必要的選項，避免路由問題
  skipTrailingSlashRedirect: false,
  trailingSlash: false,
};

export default nextConfig;
