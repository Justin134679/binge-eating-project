/** @type {import('next').NextConfig} */
const nextConfig = {
  // 設置輸出為靜態導出，使其適合 GitHub Pages
  output: 'export',
  
  // 設置基本路徑為項目名稱，使其在 GitHub Pages 上正確運行
  // 如果項目名稱不是 'binge-eating-project'，請相應更改
  basePath: process.env.NODE_ENV === 'production' ? '/binge-eating-project' : '',
  
  // 確保資源引用正確
  assetPrefix: process.env.NODE_ENV === 'production' ? '/binge-eating-project/' : '',
  
  // 調整圖像配置
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
