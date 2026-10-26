import {
  FiInstagram,
  FiTwitter,
  FiGithub,
  FiMail,
  FiArrowLeft,
} from "react-icons/fi";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <a href="#" className="footer-logo">
            Gumroad Clone
          </a>

          <p>
            بستری مدرن برای فروش محصولات دیجیتال، دوره‌های آموزشی، فایل‌ها و
            محتوای خلاقانه.
          </p>

          <div className="footer-socials">
            <a href="#" aria-label="اینستاگرام">
              <FiInstagram />
            </a>

            <a href="#" aria-label="توییتر">
              <FiTwitter />
            </a>

            <a href="#" aria-label="گیت‌هاب">
              <FiGithub />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <div>
            <h3>دسترسی سریع</h3>

            <a href="#">خانه</a>
            <a href="#">محصولات</a>
            <a href="#">فروشندگان</a>
            <a href="#">درباره ما</a>
          </div>

          <div>
            <h3>دسته‌بندی‌ها</h3>

            <a href="#">آموزش</a>
            <a href="#">طراحی</a>
            <a href="#">کتاب دیجیتال</a>
            <a href="#">برنامه‌نویسی</a>
          </div>

          <div>
            <h3>پشتیبانی</h3>

            <a href="#">سؤالات متداول</a>
            <a href="#">قوانین استفاده</a>
            <a href="#">حریم خصوصی</a>
            <a href="#">تماس با ما</a>
          </div>
        </div>

        <div className="footer-newsletter">
          <div className="newsletter-icon">
            <FiMail />
          </div>

          <h3>از محصولات جدید باخبر شو</h3>

          <p>
            ایمیلت را وارد کن تا جدیدترین محصولات و پیشنهادهای ویژه را دریافت
            کنی.
          </p>

          <form className="newsletter-form">
            <input
              type="email"
              placeholder="ایمیل شما"
              aria-label="ایمیل شما"
            />

            <button type="submit" aria-label="عضویت در خبرنامه">
              <FiArrowLeft />
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© ۲۰۲۶ Gumroad Clone — تمام حقوق محفوظ است.</p>

        <span>ساخته‌شده با React</span>
      </div>
    </footer>
  );
}

export default Footer;