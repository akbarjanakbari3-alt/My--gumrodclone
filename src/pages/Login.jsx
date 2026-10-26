import { motion } from "framer-motion";
import {
  FiMail,
  FiLock,
  FiArrowLeft,
  FiLogIn,
  FiEye,
  FiGithub,
} from "react-icons/fi";

function Login() {
  return (
    <main className="login-page">
      <motion.section
        className="login-card"
        initial={{ opacity: 0, y: 45 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="login-left">
          <span className="login-badge">Welcome Back</span>

          <h1>ورود به حساب کاربری</h1>

          <p>
            وارد حساب خود شوید تا به خریدها، دانلودها و تنظیمات حساب دسترسی داشته
            باشید.
          </p>

          <form
            className="login-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <label>
              <span>ایمیل</span>

              <div className="login-input">
                <FiMail />
                <input
                  type="email"
                  placeholder="example@email.com"
                />
              </div>
            </label>

            <label>
              <span>رمز عبور</span>

              <div className="login-input">
                <FiLock />
                <input
                  type="password"
                  placeholder="********"
                />

                <button type="button">
                  <FiEye />
                </button>
              </div>
            </label>

            <div className="login-options">
              <label>
                <input type="checkbox" />
                مرا به خاطر بسپار
              </label>

              <button type="button">
                فراموشی رمز عبور
              </button>
            </div>

            <button
              className="login-submit"
              type="submit"
            >
              ورود به حساب
              <FiArrowLeft />
            </button>

            <div className="login-divider">
              <span>یا</span>
            </div>

            <button
              className="github-login"
              type="button"
            >
              <FiGithub />
              ورود با GitHub
            </button>
          </form>
        </div>

        <div className="login-right">
          <div className="login-icon">
            <FiLogIn />
          </div>

          <h2>به فروشگاه دیجیتال خوش آمدید</h2>

          <p>
            همه محصولات خریداری‌شده، سفارش‌ها و فایل‌های دانلودی شما در یک
            داشبورد اختصاصی در دسترس خواهند بود.
          </p>
        </div>
      </motion.section>
    </main>
  );
}

export default Login;