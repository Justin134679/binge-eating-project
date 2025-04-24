import React from 'react';
import styles from './page.module.css';

export default function Home() {
  // 不再需要檢測環境和設置基礎路徑
  
  return (
    <div className={styles.container}>
      <main>
        {/* 頂部 Banner 區域 */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 data-aos="fade-up">暴飲暴食<span className={styles.textDanger}>警訊</span></h1>
            <h2 data-aos="fade-up" data-aos-delay="100">健康的危機與解決方案</h2>
            <p data-aos="fade-up" data-aos-delay="200">
              了解暴飲暴食行為對身體的損害，以及如何建立健康的飲食習慣
            </p>
            <div className={styles.ctaButtons} data-aos="fade-up" data-aos-delay="300">
              <a href="#risks" className={styles.btnDanger}>了解風險</a>
              <a href="#solutions" className={styles.btnOutline}>尋找解方</a>
            </div>
          </div>
          <div className={styles.warningArea} data-aos="zoom-in" data-aos-delay="400">
            <div className={styles.warningTriangle}></div>
            <p className={styles.warningTitle}>健康警報</p>
            <p>超過60%的人曾有暴飲暴食行為</p>
          </div>
        </section>

        {/* 風險區段 */}
        <section id="risks" className={styles.section}>
          <div className={styles.sectionHeader} data-aos="fade-up">
            <h2>暴飲暴食的<span className={styles.highlight}>健康風險</span></h2>
            <p>每次暴飲暴食都在為您的健康埋下隱患</p>
          </div>
          <div className={styles.riskCards}>
            <div className={styles.riskCard} data-aos="fade-up">
              <span className={styles.icon}><i className="fas fa-heartbeat"></i></span>
              <h3>心血管系統</h3>
              <p>短期內大量進食會使血糖急速上升，導致胰島素分泌異常，增加心臟負擔和血壓升高的風險。</p>
            </div>
            <div className={styles.riskCard} data-aos="fade-up" data-aos-delay="100">
              <span className={styles.icon}><i className="fas fa-weight-hanging"></i></span>
              <h3>肥胖問題</h3>
              <p>頻繁的暴飲暴食會導致熱量過剩，脂肪堆積，引發肥胖相關疾病，包括脂肪肝和代謝症候群。</p>
            </div>
            <div className={styles.riskCard} data-aos="fade-up" data-aos-delay="200">
              <span className={styles.icon}><i className="fas fa-brain"></i></span>
              <h3>心理健康</h3>
              <p>暴食後的罪惡感和羞恥感會導致抑鬱、焦慮，甚至更嚴重的心理問題和飲食障礙。</p>
            </div>
          </div>
        </section>

        {/* 統計數據區段 */}
        <section className={`${styles.section} ${styles.statsSection}`}>
          <div className={styles.statsContainer}>
            <div className={styles.statBox} data-aos="zoom-in">
              <h2>70%</h2>
              <p>暴食者有情緒相關觸發因素</p>
            </div>
            <div className={styles.statBox} data-aos="zoom-in" data-aos-delay="100">
              <h2>3倍</h2>
              <p>暴食後胃酸倒流風險增加</p>
            </div>
            <div className={styles.statBox} data-aos="zoom-in" data-aos-delay="200">
              <h2>80%</h2>
              <p>暴食後表示有強烈罪惡感</p>
            </div>
          </div>
        </section>

        {/* 解決方案區段 */}
        <section id="solutions" className={styles.section}>
          <div className={styles.sectionHeader} data-aos="fade-up">
            <h2>擺脫暴飲暴食的<span className={styles.highlight}>實用方法</span></h2>
            <p>建立健康飲食習慣，避免走上暴飲暴食之路</p>
          </div>
          <div className={styles.solutionSteps}>
            <div className={styles.step} data-aos="fade-right">
              <div className={styles.stepNumber}>1</div>
              <div className={styles.stepContent}>
                <h3>識別觸發因素</h3>
                <p>記錄暴食前的情緒和情境，找出引發暴食的關鍵因素，如壓力、情緒低落或社交場合。</p>
              </div>
            </div>
            <div className={styles.step} data-aos="fade-right" data-aos-delay="100">
              <div className={styles.stepNumber}>2</div>
              <div className={styles.stepContent}>
                <h3>規律進餐</h3>
                <p>每天定時定量進食，避免過度饑餓導致的失控進食。建議每3-4小時進食一次，包括正餐和健康零食。</p>
              </div>
            </div>
            <div className={styles.step} data-aos="fade-right" data-aos-delay="200">
              <div className={styles.stepNumber}>3</div>
              <div className={styles.stepContent}>
                <h3>正念飲食</h3>
                <p>專注於食物的味道、質地和氣味，慢慢咀嚼，感受飽足感，避免分心進食和快速吞嚥。</p>
              </div>
            </div>
            <div className={styles.step} data-aos="fade-right" data-aos-delay="300">
              <div className={styles.stepNumber}>4</div>
              <div className={styles.stepContent}>
                <h3>尋求專業幫助</h3>
                <p>如暴飲暴食頻繁發生，考慮諮詢營養師、心理治療師或飲食障礙專家獲取專業指導和支持。</p>
              </div>
            </div>
          </div>
        </section>

        {/* 諮詢表單 */}
        <section className={`${styles.section} ${styles.contactSection}`}>
          <div className={styles.sectionHeader} data-aos="fade-up">
            <h2>需要<span className={styles.highlight}>專業幫助</span>嗎？</h2>
            <p>填寫以下表單，我們的專業團隊將與您聯繫</p>
          </div>
          <div className={styles.formContainer} data-aos="fade-up" data-aos-delay="100">
            <a href="/test-form.html" className={styles.btnDanger}>填寫諮詢表單</a>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>© 2024 暴飲暴食警訊 | 所有內容僅供參考，不能替代專業醫療建議</p>
          <div className={styles.socialIcons}>
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
