import { motion } from "framer-motion";
import {
  FiUser,
  FiMail,
  FiLock,
  FiEye,
  FiArrowLeft,
  FiUserPlus,
} from "react-icons/fi";

function Register() {
  return (
    <main className="register-page">
      <motion.section
        className="register-card"
        initial={{ opacity: 0, y: 45 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="register-left">
          <span className="register-badge">Create Account</span>

          <h1>ایجاد حساب کاربری</h1>

          <p>
            با ایجاد حساب کاربری می‌توانید سفارش‌های خود را مدیریت کنید و به
            محصولات و فایل‌های خریداری‌شده دسترسی داشته باشید.
          </p>

          <form
            className="register-form"
            onSubmit={(event) => event.preventDefault()}
          >
            <label>
              <span>نام و نام خانوادگی</span>

              <div className="register-input">
                <FiUser />

                <input
                  type="text"
                  placeholder="مثلاً عصمت‌الله احمدی"
                  required
                />
              </div>
            </label>

            <label>
              <span>ایمیل</span>

              <div className="register-input">
                <FiMail />

                <input
                  type="email"
                  placeholder="example@email.com"
                  required
                />
              </div>
            </label>

            <label>
              <span>رمز عبور</span>

              <div className="register-input">
                <FiLock />

                <input
                  type="password"
                  placeholder="حداقل ۸ کاراکتر"
                  required
                />

                <button
                  type="button"
                  aria-label="نمایش رمز عبور"
                >
                  <FiEye />
                </button>
              </div>
            </label>

            <label>
              <span>تکرار رمز عبور</span>

              <div className="register-input">
                <FiLock />

                <input
                  type="password"
                  placeholder="رمز عبور را دوباره وارد کنید"
                  required
                />

                <button
                  type="button"
                  aria-label="نمایش تکرار رمز عبور"
                >
                  <FiEye />
                </button>
              </div>
            </label>

            <label className="register-agreement">
              <input type="checkbox" required />

              <span>
                قوانین استفاده از سایت و سیاست حفظ حریم خصوصی را مطالعه کرده‌ام
                و می‌پذیرم.
              </span>
            </label>

            <button
              type="submit"
              className="register-submit"
            >
              ایجاد حساب کاربری
              <FiArrowLeft />
            </button>

            <p className="register-login-link">
              قبلاً حساب ساخته‌اید؟

              <button type="button">
                وارد حساب شوید
              </button>
            </p>
          </form>
        </div>

        <div className="register-right">
          <div className="register-icon">
            <FiUserPlus />
          </div>

          <h2>به Gumroad Clone خوش آمدید</h2>

          <p>
            ثبت‌نام فقط چند ثانیه زمان می‌برد و پس از آن می‌توانید خریدها،
            سفارش‌ها، فایل‌های دانلودی و تنظیمات حساب خود را مدیریت کنید.
          </p>

          <div className="register-benefits">
            <span>دسترسی همیشگی به خریدها</span>
            <span>مدیریت سفارش‌ها و دانلودها</span>
            <span>تجربه خرید سریع و امن</span>
          </div>
        </div>
      </motion.section>
    </main>
  );
}

export default Register;