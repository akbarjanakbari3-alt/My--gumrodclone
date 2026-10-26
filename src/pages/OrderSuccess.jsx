import { motion } from "framer-motion";
import {
  FiCheckCircle,
  FiDownload,
  FiShoppingBag,
  FiHome,
  FiMail,
  FiShield,
} from "react-icons/fi";

function OrderSuccess() {
  return (
    <main className="success-page">
      <motion.section
        className="success-card"
        initial={{ opacity: 0, y: 55, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="success-glow success-glow-one"></div>
        <div className="success-glow success-glow-two"></div>

        <motion.div
          className="success-icon"
          initial={{ scale: 0, rotate: -25 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 14,
            delay: 0.25,
          }}
        >
          <FiCheckCircle />
        </motion.div>

        <span className="success-label">پرداخت موفق</span>

        <h1>سفارش شما با موفقیت ثبت شد.</h1>

        <p className="success-description">
          پرداخت شما تأیید شد و محصولات خریداری‌شده اکنون برای دانلود در دسترس
          هستند.
        </p>

        <div className="success-order-info">
          <div>
            <span>شماره سفارش</span>
            <strong>#GR-1405-9821</strong>
          </div>

          <div>
            <span>مبلغ پرداخت‌شده</span>
            <strong>۱٬۰۱۰٬۰۰۰ تومان</strong>
          </div>

          <div>
            <span>تعداد محصولات</span>
            <strong>۲ محصول</strong>
          </div>
        </div>

        <div className="success-products">
          <article className="success-product">
            <div className="success-product-image success-product-purple">
              React
            </div>

            <div>
              <h3>دوره جامع آموزش React</h3>
              <span>آماده دانلود</span>
            </div>

            <button type="button">
              <FiDownload />
              دانلود
            </button>
          </article>

          <article className="success-product">
            <div className="success-product-image success-product-pink">
              UI Kit
            </div>

            <div>
              <h3>مجموعه کامل طراحی رابط کاربری</h3>
              <span>آماده دانلود</span>
            </div>

            <button type="button">
              <FiDownload />
              دانلود
            </button>
          </article>
        </div>

        <div className="success-notice">
          <FiMail />

          <div>
            <strong>رسید سفارش ارسال شد</strong>
            <p>
              جزئیات خرید و لینک‌های دانلود به ایمیل شما ارسال شده است.
            </p>
          </div>
        </div>

        <div className="success-actions">
          <button type="button" className="success-primary-btn">
            <FiShoppingBag />
            مشاهده سفارش‌ها
          </button>

          <button type="button" className="success-secondary-btn">
            <FiHome />
            بازگشت به خانه
          </button>
        </div>

        <div className="success-security">
          <FiShield />
          پرداخت شما به‌صورت امن پردازش شد.
        </div>
      </motion.section>
    </main>
  );
}

export default OrderSuccess;