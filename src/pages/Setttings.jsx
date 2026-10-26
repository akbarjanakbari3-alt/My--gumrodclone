import { motion } from "framer-motion";
import {
  FiSettings,
  FiMoon,
  FiBell,
  FiLock,
  FiGlobe,
  FiSave,
} from "react-icons/fi";

function Settings() {
  return (
    <main className="settings-page">
      <motion.div
        className="settings-header"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1>تنظیمات</h1>

        <p>تنظیمات حساب کاربری و شخصی‌سازی سایت</p>
      </motion.div>

      <section className="settings-card">
        <div className="setting-item">
          <div>
            <FiMoon />
            <span>حالت تاریک</span>
          </div>

          <input type="checkbox" />
        </div>

        <div className="setting-item">
          <div>
            <FiBell />
            <span>اعلان‌ها</span>
          </div>

          <input type="checkbox" defaultChecked />
        </div>

        <div className="setting-item">
          <div>
            <FiLock />
            <span>احراز هویت دو مرحله‌ای</span>
          </div>

          <input type="checkbox" />
        </div>

        <div className="setting-item">
          <div>
            <FiGlobe />
            <span>زبان سایت</span>
          </div>

          <select>
            <option>فارسی</option>
            <option>English</option>
          </select>
        </div>

        <button className="settings-save-btn">
          <FiSave />
          ذخیره تنظیمات
        </button>
      </section>
    </main>
  );
}

export default Settings;