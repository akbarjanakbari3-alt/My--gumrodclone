function Creators() {
  return (
    <section className="creators">
      <div className="section-heading">
        <span>فروشندگان برتر</span>
        <h2>از بهترین سازندگان خرید کنید</h2>
        <p>
          محصولات دیجیتال حرفه‌ای را مستقیماً از سازندگان مورداعتماد تهیه کنید.
        </p>
      </div>

      <div className="creator-list">
        <article className="creator-card">
          <div className="creator-avatar">م</div>

          <h3>محمد احمدی</h3>
          <span>مدرس برنامه‌نویسی</span>

          <div className="creator-info">
            <p>۱۸ محصول</p>
            <p>۲٬۴۰۰ فروش</p>
          </div>

          <button>مشاهده فروشگاه</button>
        </article>

        <article className="creator-card">
          <div className="creator-avatar">س</div>

          <h3>سارا کریمی</h3>
          <span>طراح رابط کاربری</span>

          <div className="creator-info">
            <p>۲۵ محصول</p>
            <p>۳٬۱۰۰ فروش</p>
          </div>

          <button>مشاهده فروشگاه</button>
        </article>

        <article className="creator-card">
          <div className="creator-avatar">ع</div>

          <h3>علی رضایی</h3>
          <span>نویسنده و تولیدکننده محتوا</span>

          <div className="creator-info">
            <p>۱۲ محصول</p>
            <p>۱٬۸۰۰ فروش</p>
          </div>

          <button>مشاهده فروشگاه</button>
        </article>
      </div>
    </section>
  );
}

export default Creators;