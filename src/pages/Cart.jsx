import { motion } from "framer-motion";
import {
  FiMinus,
  FiPlus,
  FiTrash2,
  FiShoppingBag,
  FiShield,
  FiArrowLeft,
} from "react-icons/fi";

const cartItems = [
  {
    id: 1,
    title: "دوره جامع آموزش React",
    category: "برنامه‌نویسی",
    price: "۵۹۰٬۰۰۰ تومان",
    quantity: 1,
    colorClass: "cart-item-purple",
    imageTitle: "React Course",
  },
  {
    id: 2,
    title: "مجموعه کامل طراحی رابط کاربری",
    category: "طراحی رابط کاربری",
    price: "۴۲۰٬۰۰۰ تومان",
    quantity: 1,
    colorClass: "cart-item-pink",
    imageTitle: "UI Kit",
  },
];

function Cart() {
  return (
    <main className="cart-page">
      <motion.section
        className="cart-header"
        initial={{ opacity: 0, y: 45 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="cart-header-icon">
          <FiShoppingBag />
        </div>

        <div>
          <span>سبد خرید</span>
          <h1>محصولات انتخاب‌شده شما</h1>
          <p>قبل از پرداخت، محصولات و مبلغ نهایی را بررسی کنید.</p>
        </div>
      </motion.section>

      <section className="cart-layout">
        <motion.div
          className="cart-items"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="cart-items-heading">
            <h2>محصولات سبد خرید</h2>
            <span>{cartItems.length} محصول</span>
          </div>

          {cartItems.map((item) => (
            <article className="cart-item" key={item.id}>
              <div className={`cart-item-image ${item.colorClass}`}>
                <span>{item.imageTitle}</span>
              </div>

              <div className="cart-item-content">
                <span className="cart-item-category">{item.category}</span>

                <h3>{item.title}</h3>

                <strong>{item.price}</strong>

                <div className="cart-item-actions">
                  <div className="cart-quantity">
                    <button type="button" aria-label="کاهش تعداد">
                      <FiMinus />
                    </button>

                    <span>{item.quantity}</span>

                    <button type="button" aria-label="افزایش تعداد">
                      <FiPlus />
                    </button>
                  </div>

                  <button
                    type="button"
                    className="cart-remove-btn"
                    aria-label="حذف محصول"
                  >
                    <FiTrash2 />
                    حذف
                  </button>
                </div>
              </div>
            </article>
          ))}
        </motion.div>

        <motion.aside
          className="cart-summary"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          <div className="cart-summary-title">
            <h2>خلاصه سفارش</h2>
            <span>پرداخت امن</span>
          </div>

          <div className="cart-summary-row">
            <span>جمع محصولات</span>
            <strong>۱٬۰۱۰٬۰۰۰ تومان</strong>
          </div>

          <div className="cart-summary-row">
            <span>تخفیف</span>
            <strong className="cart-discount">۰ تومان</strong>
          </div>

          <div className="cart-summary-divider"></div>

          <div className="cart-summary-total">
            <span>مبلغ نهایی</span>
            <strong>۱٬۰۱۰٬۰۰۰ تومان</strong>
          </div>

          <form
            className="cart-coupon"
            onSubmit={(event) => event.preventDefault()}
          >
            <input
              type="text"
              placeholder="کد تخفیف"
              aria-label="کد تخفیف"
            />

            <button type="submit">اعمال</button>
          </form>

          <button type="button" className="cart-checkout-btn">
            ادامه فرایند پرداخت
            <FiArrowLeft />
          </button>

          <div className="cart-secure-note">
            <FiShield />

            <p>
              اطلاعات پرداخت شما با پروتکل‌های امن محافظت می‌شود.
            </p>
          </div>
        </motion.aside>
      </section>
    </main>
  );
}

export default Cart;