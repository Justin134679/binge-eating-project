import './globals.css';
import Script from 'next/script';

export const metadata = {
  title: '暴飲暴食警訊 | 健康危機解析',
  description: '了解暴飲暴食對健康的重大影響及其解決方案',
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700;900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
        
        {/* 在頁面加載前内嵌關鍵CSS變量 */}
        <style dangerouslySetInnerHTML={{
          __html: `
            :root {
              --danger: #e11d48;
              --danger-light: #fb7185;
              --danger-dark: #be123c;
              --warning: #f97316;
              --warning-light: #fdba74;
              --warning-dark: #c2410c;
              --dark: #27272a;
              --dark-light: #52525b;
              --gray: #71717a;
              --light: #ffffff;
              --light-gray: #f4f4f5;
              --bg-light: #fafafa;
              --border-light: #e4e4e7;
            }
          `
        }} />
      </head>
      <body>
        {children}
        
        {/* 外部腳本 */}
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js" strategy="afterInteractive" />
        <Script id="aos-init" strategy="afterInteractive">
          {`
            document.addEventListener('DOMContentLoaded', function() {
              AOS.init({
                duration: 1000,
                once: false,
                mirror: true,
                offset: 120,
              });
            });
          `}
        </Script>
      </body>
    </html>
  );
}
