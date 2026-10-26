import { FiStar } from "react-icons/fi";

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="section-heading">
        <span>تجربه کاربران</span>
        <h2>کاربران درباره ما چه می‌گویند؟</h2>
        <p>
          تجربه واقعی خریداران و فروشندگانی که محصولات دیجیتال خود را از طریق
          این پلتفرم منتشر کرده‌اند.
        </p>
      </div>

      <div className="testimonial-list">
        <article className="testimonial-card">
          <div className="testimonial-stars">
            <FiStar />
            <FiStar />
            <FiStar />
            <FiStar />
            <FiStar />
          </div>

          <p className="testimonial-text">
            رابط کاربری بسیار روان است و توانستم در مدت کوتاهی فروشگاه خودم را
            راه‌اندازی کنم. همه‌چیز دقیق و حرفه‌ای طراحی شده است.
          </p>

          <div className="testimonial-user">
            <div className="testimonial-avatar">ن</div>

            <div>
              <h3>نگار محمدی</h3>
              <span>طراح گرافیک</span>
            </div>
          </div>
        </article>

        <article className="testimonial-card">
          <div className="testimonial-stars">
            <FiStar />
            <FiStar />
            <FiStar />
            <FiStar />
            <FiStar />
          </div>

          <p className="testimonial-text">
            ظاهر سایت حس یک پلتفرم بین‌المللی را منتقل می‌کند. خرید محصولات
            بسیار ساده است و صفحه‌ها با سرعت خوبی اجرا می‌شوند.
          </p>

          <div className="testimonial-user">
            <div className="testimonial-avatar">ا</div>

            <div>
              <h3>اکبرجان آرین  </h3>
              <span>توسعه‌دهنده وب</span>
            </div>
          </div>
        </article>

        <article className="testimonial-card">
          <div className="testimonial-stars">
            <FiStar />
            <FiStar />
            <FiStar />
            <FiStar />
            <FiStar />
          </div>

          <p className="testimonial-text">
            بخش فروشندگان و محصولات بسیار جذاب است. در موبایل هم همه‌چیز مرتب
            و خوانا نمایش داده می‌شود.
          </p>

          <div className="testimonial-user">
            <div className="testimonial-avatar">م</div>

            <div>
              <h3>مریم رضایی</h3>
              <span>تولیدکننده محتوا</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Testimonials;