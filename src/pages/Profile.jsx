import { motion } from "framer-motion";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiMapPin,
  FiCamera,
  FiSave,
  FiShield,
} from "react-icons/fi";

function Profile() {
  return (
    <main className="profile-page">
      <motion.section
        className="profile-header"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div>
          <h1>پروفایل کاربری</h1>

          <p>
            اطلاعات شخصی و مشخصات حساب کاربری خود را مدیریت کنید.
          </p>
        </div>

        <div className="profile-status">
          <FiShield />
          حساب تأییدشده
        </div>
      </motion.section>

      <section className="profile-layout">
        <motion.aside
          className="profile-avatar-card"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="profile-avatar">
            EA
          </div>

          <h2>Akbar jan ARYAN</h2>

          <span>Premium Member</span>

          <button type="button" className="profile-photo-btn">
            <FiCamera />
            تغییر تصویر پروفایل
          </button>

          <p>
            تصویر پروفایل بهتر است مربع و با حجم کمتر از ۲ مگابایت باشد.
          </p>
        </motion.aside>

        <motion.form
          className="profile-form"
          onSubmit={(event) => event.preventDefault()}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="profile-form-heading">
            <div>
              <span>اطلاعات حساب</span>
              <h2>ویرایش اطلاعات شخصی</h2>
            </div>

            <FiUser />
          </div>

          <div className="profile-fields">
            <label>
              <span>نام</span>

              <div className="profile-input">
                <FiUser />

                <input
                  type="text"
                  defaultValue="Akbarjan "
                  required
                />
              </div>
            </label>

            <label>
              <span>نام خانوادگی</span>

              <div className="profile-input">
                <FiUser />

                <input
                  type="text"
                  defaultValue="Aryan Akbari"
                  required
                />
              </div>
            </label>

            <label>
              <span>ایمیل</span>

              <div className="profile-input">
                <FiMail />

                <input
                  type="email"
                  defaultValue="Akbararyaniuc@example.com"
                  required
                />
              </div>
            </label>

            <label>
              <span>شماره تماس</span>

              <div className="profile-input">
                <FiPhone />

                <input
                  type="tel"
                  placeholder="09xxxxxxxxx"
                />
              </div>
            </label>

            <label className="profile-full-field">
              <span>کشور یا منطقه</span>

              <div className="profile-input">
                <FiMapPin />

                <input
                  type="text"
                  defaultValue="ایران"
                />
              </div>
            </label>

            <label className="profile-full-field">
              <span>درباره من</span>

              <textarea
                placeholder="سلام، من اکبر جان آرین هستم، دانشجوی ترم هشتم مهندسی کامپیوتر (فناوری اطلاعات) در دانشگاه بین‌المللی چابهار. به توسعه نرم‌افزار و طراحی وب علاقه‌مندم و به‌عنوان برنامه‌نویس Full Stack در زمینه طراحی و توسعه وب‌سایت و اپلیکیشن فعالیت می‌کنم. همواره در تلاش هستم با یادگیری فناوری‌های جدید، راهکارهای نوآورانه و کاربردی ارائه دهم. همچنین به زبان‌های فارسی، پشتو، انگلیسی و اردو مسلط هستم.

شماره دانشجویی: 4002427948"
                rows="5"
              ></textarea>
            </label>
          </div>

          <button type="submit" className="profile-save-btn">
            <FiSave />
            ذخیره تغییرات
          </button>
        </motion.form>
      </section>
    </main>
  );
}

export default Profile;