import { motion } from "framer-motion";
import { FiHome, FiArrowRight, FiSearch } from "react-icons/fi";

function NotFound() {
  return (
    <main className="not-found-page">
      <motion.section
        className="not-found-card"
        initial={{ opacity: 0, y: 45, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <div className="not-found-glow not-found-glow-one"></div>
        <div className="not-found-glow not-found-glow-two"></div>

        <motion.div
          className="not-found-code"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          404
        </motion.div>

        <span className="not-found-badge">صفحه پیدا نشد</span>

        <h1>به نظر می‌رسد مسیر را اشتباه آمده‌اید.</h1>

        <p>
          صفحه‌ای که دنبال آن هستید حذف شده، تغییر آدرس داده یا از ابتدا وجود
          نداشته است.
        </p>

        <div className="not-found-search">
          <FiSearch />

          <input
            type="search"
            placeholder="جست‌وجو در سایت..."
          />

          <button type="button">
            جست‌وجو
          </button>
        </div>

        <div className="not-found-actions">
          <button
            type="button"
            className="not-found-home-btn"
          >
            <FiHome />
            بازگشت به خانه
          </button>

          <button
            type="button"
            className="not-found-back-btn"
            onClick={() => window.history.back()}
          >
            <FiArrowRight />
            بازگشت به صفحه قبل
          </button>
        </div>
      </motion.section>
    </main>
  );
}

export default NotFound;