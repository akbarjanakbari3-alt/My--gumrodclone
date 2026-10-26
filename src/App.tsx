export default function App() {
  return (
    <div>
      {/* هدر سایت */}
      <header className="navbar">
        <div className="logo">Gumroad Clone</div>
        <nav>
          <a href="#">محصولات</a>
          <a href="#">شروع به فروش</a>
          <a href="#" className="btn-login">ورود</a>
        </nav>
      </header>

      {/* بخش هیرو */}
      <section className="hero">
        <h1>هر چیزی که می‌سازید را به فروش برسانید.</h1>
        <p>به سادگی محصولات دیجیتال، ایبوک و فایل‌های خود را به مخاطبان ارائه دهید.</p>
        <button className="btn-primary">شروع کنید</button>
      </section>

      {/* لیست محصولات */}
      <main className="products-section">
        <h2>محصولات پیشنهادی</h2>
        <div className="product-grid">
          
          <div className="product-card">
            <div className="product-image">📚</div>
            <h3>آموزش جامع جاوااسکریپت</h3>
            <p className="product-author">توسط علی رضایی</p>
            <div className="product-footer">
              <span className="price">۱۹ دلار</span>
              <button className="btn-buy">خرید محصول</button>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">🎨</div>
            <h3>پکیج آیکون‌های مینیمال UI</h3>
            <p className="product-author">توسط سارا محمدی</p>
            <div className="product-footer">
              <span className="price">۱۲ دلار</span>
              <button className="btn-buy">خرید محصول</button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}