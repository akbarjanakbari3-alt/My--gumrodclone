import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiPlay,
  FiZoomIn,
  FiHeart,
  FiShoppingBag,
  FiArrowRight,
} from "react-icons/fi";

function ProductDetails() {
  return (
    <main className="product-page">
      <section className="product-hero">
        <motion.div
          className="product-gallery"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="product-main-preview">
            <div className="product-preview-badge">پرفروش</div>

            <span className="product-preview-title">React Course</span>

            <button
              type="button"
              className="product-preview-play"
              aria-label="پخش پیش‌نمایش محصول"
            >
              <FiPlay />
            </button>

            <button
              type="button"
              className="product-preview-zoom"
              aria-label="بزرگ‌نمایی تصویر محصول"
            >
              <FiZoomIn />
            </button>
          </div>

          <div className="product-thumbnails">
            <button
              type="button"
              className="product-thumbnail product-thumbnail-active"
              aria-label="نمای اصلی محصول"
            >
              <span>01</span>
            </button>

            <button
              type="button"
              className="product-thumbnail"
              aria-label="نمای دوم محصول"
            >
              <span>02</span>
            </button>

            <button
              type="button"
              className="product-thumbnail"
              aria-label="نمای سوم محصول"
            >
              <span>03</span>
            </button>

            <button
              type="button"
              className="product-thumbnail product-thumbnail-video"
              aria-label="ویدئوی معرفی محصول"
            >
              <FiPlay />
            </button>
          </div>
        </motion.div>

        <motion.div
          className="product-info"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <Link to="/shop" className="product-back-link">
            <FiArrowRight />
            بازگشت به فروشگاه
          </Link>

          <span className="product-category">برنامه‌نویسی</span>

          <h1 className="product-title">
            دوره جامع آموزش React از مقدماتی تا پیشرفته
          </h1>

          <p className="product-short-description">
            بیش از ۳۰ ساعت آموزش ویدیویی، پروژه عملی، فایل‌های تمرینی،
            بروزرسانی مادام‌العمر و پشتیبانی کامل.
          </p>

          <div className="product-rating-row">
            <span>⭐ 4.9</span>
            <span>184 نظر</span>
            <span>1240 فروش</span>
          </div>

          <div className="product-price-box">
            <div>
              <small>قیمت</small>
              <strong>590,000 تومان</strong>
              <del>790,000 تومان</del>
            </div>

            <span className="product-discount">25٪ تخفیف</span>
          </div>

          <div className="product-actions">
            <Link to="/cart" className="buy-button">
              <FiShoppingBag />
              افزودن به سبد خرید
            </Link>

            <Link to="/checkout" className="wishlist-button">
              خرید فوری
            </Link>

            <button
              type="button"
              className="wishlist-button"
            >
              <FiHeart />
              افزودن به علاقه‌مندی
            </button>
          </div>

          <div className="product-guarantee">
            ✔️ دانلود فوری
            <br />
            ✔️ بروزرسانی رایگان
            <br />
            ✔️ پشتیبانی دائمی
          </div>
        </motion.div>
      </section>

      <section className="product-description">
        <div className="seller-card">
          <div className="seller-avatar">SA</div><div className="seller-info">
            <h3>Salvo Studio</h3>
            <p>بیش از ۲۵ محصول منتشر شده</p>
          </div>

          <Link to="/profile">
            مشاهده پروفایل
          </Link>
        </div>

        <div className="product-description-box">
          <h2>درباره محصول</h2>

          <p>
            این محصول شامل آموزش کامل، فایل‌های پروژه، بروزرسانی دائمی، سورس
            کدها، تمرین‌ها و پشتیبانی کامل است.
          </p>

          <ul>
            <li>بیش از ۳۰ ساعت آموزش</li>
            <li>دانلود مادام‌العمر</li>
            <li>بروزرسانی رایگان</li>
            <li>سورس کامل پروژه</li>
            <li>پشتیبانی مستقیم</li>
          </ul>
        </div>
      </section>

      <section className="related-products">
        <div className="section-title">
          <span>پیشنهاد ویژه</span>
          <h2>محصولات مرتبط</h2>
        </div>

        <div className="related-grid">
          {[1, 2, 3].map((item) => (
            <Link
              to="/product"
              key={item}
              className="related-card"
            >
              <div className="related-image">
                Product {item}
              </div>

              <div className="related-content">
                <span>برنامه‌نویسی</span>

                <h3>دوره حرفه‌ای React</h3>

                <strong>390,000 تومان</strong>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

export default ProductDetails;