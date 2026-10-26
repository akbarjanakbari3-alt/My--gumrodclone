import { motion } from "framer-motion";
import { FiArrowLeft, FiCheckCircle } from "react-icons/fi";

function CTA() {
  return (
    <section className="cta">
      <div className="cta-glow cta-glow-one"></div>
      <div className="cta-glow cta-glow-two"></div>

      <div className="cta-content">
        <motion.span
          className="cta-label"
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          همین امروز شروع کن
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          محصول دیجیتال خودت را بساز، منتشر کن و بفروش.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          بدون پیچیدگی فنی، فروشگاه شخصی خودت را راه‌اندازی کن و مستقیماً به
          مشتریان سراسر دنیا بفروش.
        </motion.p>

        <motion.div
          className="cta-benefits"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <span>
            <FiCheckCircle />
            راه‌اندازی سریع
          </span>

          <span>
            <FiCheckCircle />
            بدون نیاز به برنامه‌نویسی
          </span>

          <span>
            <FiCheckCircle />
            مدیریت آسان محصولات
          </span>
        </motion.div>

        <motion.div
          className="cta-actions"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <motion.button
            type="button"
            className="cta-primary-btn"
            whileHover={{ y: -4, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            ساخت فروشگاه رایگان
            <FiArrowLeft />
          </motion.button>

          <motion.button
            type="button"
            className="cta-secondary-btn"
            whileHover={{ y: -4, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            مشاهده محصولات
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        className="cta-preview"
        initial={{ opacity: 0, x: -60, rotate: -5 }}
        whileInView={{ opacity: 1, x: 0, rotate: -2 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.2 }}
        whileHover={{ y: -8, rotate: 0 }}
      >
        <div className="cta-preview-header">
          <div className="cta-preview-avatar">س</div>

          <div>
            <strong>فروشگاه سارا</strong>
            <span>طراحی و فایل‌های گرافیکی</span>
          </div>
        </div>

        <div className="cta-preview-product">
          <div className="cta-preview-image">
            <span>UI Kit</span>
          </div>

          <div className="cta-preview-info">
            <span>محصول جدید</span>
            <h3>مجموعه کامل طراحی اپلیکیشن</h3>
            <strong>۴۲۰ هزار تومان</strong>
          </div>
        </div>

        <div className="cta-preview-stats">
          <div>
            <strong>۲۸</strong>
            <span>محصول</span>
          </div>

          <div>
            <strong>۳٬۴۲۰</strong>
            <span>فروش</span>
          </div>

          <div>
            <strong>۴.۹</strong>
            <span>امتیاز</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default CTA;