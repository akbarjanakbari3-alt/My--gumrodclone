import { motion } from "framer-motion";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiMapPin,
  FiCreditCard,
  FiShield,
  FiLock,
  FiArrowLeft,
  FiShoppingBag,
} from "react-icons/fi";

function Checkout() {
  return (
    <main className="checkout-page">
      <motion.section
        className="checkout-header"
        initial={{ opacity: 0, y: 45 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="checkout-header-icon">
          <FiCreditCard />
        </div>

        <div>
          <span>تکمیل خرید</span>
          <h1>اطلاعات پرداخت و سفارش</h1>
          <p>
            اطلاعات خود را وارد کنید و سفارش را برای پرداخت نهایی بررسی کنید.
          </p>
        </div>
      </motion.section>

      <section className="checkout-layout">
        <motion.form
          className="checkout-form"
          onSubmit={(event) => event.preventDefault()}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="checkout-section-heading">
            <div>
              <span>مرحله اول</span>
              <h2>اطلاعات خریدار</h2>
            </div>

            <FiUser />
          </div>

          <div className="checkout-fields">
            <label>
              <span>نام و نام خانوادگی</span>

              <div className="checkout-input">
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

              <div className="checkout-input">
                <FiMail />
                <input
                  type="email"
                  placeholder="example@email.com"
                  required
                />
              </div>
            </label>

            <label>
              <span>شماره تماس</span>

              <div className="checkout-input">
                <FiPhone />
                <input
                  type="tel"
                  placeholder="09xxxxxxxxx"
                  required
                />
              </div>
            </label>

            <label>
              <span>کشور یا منطقه</span>

              <div className="checkout-input">
                <FiMapPin />
                <input
                  type="text"
                  placeholder="ایران"
                  required
                />
              </div>
            </label>
          </div>

          <div className="checkout-section-heading checkout-payment-heading">
            <div>
              <span>مرحله دوم</span>
              <h2>روش پرداخت</h2>
            </div>

            <FiCreditCard />
          </div>

          <div className="checkout-payment-methods">
            <label className="checkout-payment-option active">
              <input
                type="radio"
                name="payment"
                defaultChecked
              />

              <div>
                <FiCreditCard />

                <span>
                  <strong>پرداخت آنلاین</strong>
                  <small>اتصال امن به درگاه پرداخت</small>
                </span>
              </div>
            </label>

            <label className="checkout-payment-option">
              <input
                type="radio"
                name="payment"
              />

              <div>
                <FiShoppingBag />

                <span>
                  <strong>کیف پول</strong>
                  <small>پرداخت از موجودی حساب کاربری</small>
                </span>
              </div>
            </label>
          </div>

          <label className="checkout-agreement">
            <input type="checkbox" required />

            <span>
              قوانین و شرایط استفاده از سایت و سیاست بازگشت وجه را مطالعه کرده‌ام
              و می‌پذیرم.
            </span>
          </label>
        </motion.form><motion.aside
          className="checkout-summary"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          <div className="checkout-summary-title">
            <h2>خلاصه سفارش</h2>
            <span>۲ محصول</span>
          </div>

          <div className="checkout-product">
            <div className="checkout-product-image checkout-product-purple">
              React
            </div>

            <div>
              <h3>دوره جامع آموزش React</h3>
              <span>۵۹۰٬۰۰۰ تومان</span>
            </div>
          </div>

          <div className="checkout-product">
            <div className="checkout-product-image checkout-product-pink">
              UI Kit
            </div>

            <div>
              <h3>مجموعه کامل طراحی رابط کاربری</h3>
              <span>۴۲۰٬۰۰۰ تومان</span>
            </div>
          </div>

          <div className="checkout-summary-row">
            <span>جمع محصولات</span>
            <strong>۱٬۰۱۰٬۰۰۰ تومان</strong>
          </div>

          <div className="checkout-summary-row">
            <span>تخفیف</span>
            <strong className="checkout-discount">۰ تومان</strong>
          </div>

          <div className="checkout-summary-divider"></div>

          <div className="checkout-summary-total">
            <span>مبلغ قابل پرداخت</span>
            <strong>۱٬۰۱۰٬۰۰۰ تومان</strong>
          </div>

          <button type="button" className="checkout-pay-btn">
            پرداخت و تکمیل سفارش
            <FiArrowLeft />
          </button>

          <div className="checkout-security">
            <FiShield />

            <div>
              <strong>پرداخت امن</strong>
              <p>
                اطلاعات شما با رمزنگاری و پروتکل‌های امنیتی محافظت می‌شود.
              </p>
            </div>
          </div>

          <div className="checkout-lock-note">
            <FiLock />
            اطلاعات بانکی در سایت ذخیره نمی‌شود.
          </div>
        </motion.aside>
      </section>
    </main>
  );
}

export default Checkout;