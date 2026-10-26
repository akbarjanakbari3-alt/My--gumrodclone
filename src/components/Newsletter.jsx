import { motion } from "framer-motion";
import { FiMail, FiArrowLeft, FiCheck } from "react-icons/fi";

function Newsletter() {
  return (
    <section className="newsletter-section">
      <div className="newsletter-glow newsletter-glow-one"></div>
      <div className="newsletter-glow newsletter-glow-two"></div>

      <motion.div
        className="newsletter-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="newsletter-main-icon">
          <FiMail />
        </div>

        <span className="newsletter-label">خبرنامه</span>

        <h2>محصولات جدید را زودتر از همه ببین.</h2>

        <p>
          ایمیلت را وارد کن تا جدیدترین محصولات، تخفیف‌ها و پیشنهادهای ویژه را
          مستقیم دریافت کنی.
        </p>

        <form
          className="newsletter-main-form"
          onSubmit={(event) => event.preventDefault()}
        >
          <input
            type="email"
            placeholder="ایمیل خود را وارد کنید"
            aria-label="ایمیل"
            required
          />

          <motion.button
            type="submit"
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            عضویت رایگان
            <FiArrowLeft />
          </motion.button>
        </form>

        <div className="newsletter-points">
          <span>
            <FiCheck />
            بدون پیام تبلیغاتی آزاردهنده
          </span>

          <span>
            <FiCheck />
            لغو عضویت در هر زمان
          </span>

          <span>
            <FiCheck />
            پیشنهادهای اختصاصی کاربران
          </span>
        </div>
      </motion.div>

      <motion.div
        className="newsletter-preview"
        initial={{ opacity: 0, x: -60, rotate: -4 }}
        whileInView={{ opacity: 1, x: 0, rotate: -2 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
        whileHover={{ y: -8, rotate: 0 }}
      >
        <div className="newsletter-preview-top">
          <span>خبرنامه این هفته</span>
          <strong>شماره ۲۴</strong>
        </div>

        <div className="newsletter-preview-card">
          <div className="newsletter-preview-image">
            <span>NEW</span>
          </div>

          <div className="newsletter-preview-info">
            <small>محصول منتخب هفته</small>
            <h3>مجموعه حرفه‌ای طراحی رابط کاربری</h3>
            <p>بیش از ۱۲۰ صفحه آماده برای طراحی اپلیکیشن و وب‌سایت.</p>

            <div>
              <strong>۳۹۰ هزار تومان</strong>
              <button type="button">مشاهده محصول</button>
            </div>
          </div>
        </div>

        <div className="newsletter-preview-footer">
          <span>ارسال‌شده برای ۱۲٬۸۰۰ کاربر</span>
          <span>نرخ بازشدن ۷۶٪</span>
        </div>
      </motion.div>
    </section>
  );
}

export default Newsletter;