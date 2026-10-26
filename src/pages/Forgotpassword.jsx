import { motion } from "framer-motion";
import {
  FiMail,
  FiArrowLeft,
  FiKey,
  FiShield,
  FiCheckCircle,
} from "react-icons/fi";

function ForgotPassword() {
  return (
    <main className="forgot-page">
      <motion.section
        className="forgot-card"
        initial={{ opacity: 0, y: 45, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="forgot-glow forgot-glow-one"></div>
        <div className="forgot-glow forgot-glow-two"></div>

        <div className="forgot-icon">
          <FiKey />
        </div>

        <span className="forgot-badge">بازیابی حساب</span>

        <h1>رمز عبور خود را فراموش کرده‌اید؟</h1>

        <p className="forgot-description">
          ایمیل حساب کاربری خود را وارد کنید تا لینک بازیابی رمز عبور برای شما
          ارسال شود.
        </p>

        <form
          className="forgot-form"
          onSubmit={(event) => event.preventDefault()}
        >
          <label>
            <span>آدرس ایمیل</span>

            <div className="forgot-input">
              <FiMail />

              <input
                type="email"
                placeholder="example@email.com"
                required
              />
            </div>
          </label>

          <button
            type="submit"
            className="forgot-submit"
          >
            ارسال لینک بازیابی
            <FiArrowLeft />
          </button>
        </form>

        <div className="forgot-help">
          <FiCheckCircle />

          <div>
            <strong>ایمیل را بررسی کنید</strong>

            <p>
              در صورت وجود حساب با این ایمیل، لینک بازیابی برای شما ارسال خواهد
              شد.
            </p>
          </div>
        </div>

        <button
          type="button"
          className="forgot-back-login"
        >
          بازگشت به صفحه ورود
        </button>

        <div className="forgot-security">
          <FiShield />
          لینک بازیابی برای مدت محدودی معتبر خواهد بود.
        </div>
      </motion.section>
    </main>
  );
}

export default ForgotPassword;