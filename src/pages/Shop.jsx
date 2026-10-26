import { Link } from "react-router-dom";
import { products } from "../data/products";
import { motion } from "framer-motion";
import {
  FiSearch,
  FiFilter,
  FiChevronDown,
  FiHeart,
  FiStar,
  FiShoppingBag,
} from "react-icons/fi";

function Shop() {
  return (
    <main className="shop-page">
      <motion.section
        className="shop-hero"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="shop-hero-content">
          <span>فروشگاه محصولات دیجیتال</span>

          <h1>محصولی برای هر ایده و هر مهارت</h1>

          <p>
            دوره‌های آموزشی، قالب‌ها، کتاب‌های دیجیتال و فایل‌های خلاقانه را
            از بهترین سازندگان پیدا کن.
          </p>
        </div>

        <form
          className="shop-main-search"
          onSubmit={(event) => event.preventDefault()}
        >
          <FiSearch />

          <input
            type="search"
            placeholder="جستجو میان محصولات..."
            aria-label="جستجوی محصولات"
          />

          <button type="submit">جستجو</button>
        </form>
      </motion.section>

      <section className="shop-toolbar">
        <div className="shop-categories">
          <button type="button" className="active">
            همه محصولات
          </button>

          <button type="button">آموزش</button>
          <button type="button">طراحی</button>
          <button type="button">برنامه‌نویسی</button>
          <button type="button">کتاب دیجیتال</button>
        </div>

        <div className="shop-toolbar-actions">
          <button type="button">
            <FiFilter />
            فیلترها
          </button>

          <button type="button">
            جدیدترین
            <FiChevronDown />
          </button>
        </div>
      </section>

      <section className="shop-results">
        <div className="shop-results-heading">
          <div>
            <span>محصولات منتخب</span>
            <h2>کشف محصولات جدید</h2>
          </div>

          <p>{products.length} محصول نمایش داده می‌شود</p>
        </div>

        <motion.div
          className="shop-product-grid"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
        >
          {products.map((product) => (
            <motion.article
              className="shop-product-card"
              key={product.id}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 45,
                  scale: 0.96,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.6,
                    ease: "easeOut",
                  },
                },
              }}
              whileHover={{ y: -9 }}
            >
              <Link
                to="/product"
                className="shop-product-link"
                aria-label={`مشاهده ${product.title}`}
              >
                <div className={`shop-product-image ${product.colorClass}`}>
                  <span>{product.imageTitle}</span>
                </div>

                <div className="shop-product-content">
                  <div className="shop-product-meta">
                    <span>{product.category}</span>

                    <div>
                      <FiStar />
                      <strong>{product.rating}</strong>
                    </div>
                  </div>

                  <h3>{product.title}</h3>

                  <p>{product.sales}</p>
                </div>
              </Link>

              <button
                type="button"
                className="shop-wishlist-btn"
                aria-label="افزودن به علاقه‌مندی‌ها"
              >
                <FiHeart />
              </button><div className="shop-product-footer">
                <strong>{product.price}</strong>

                <Link to="/product">
                  <FiShoppingBag />
                  مشاهده محصول
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>
    </main>
  );
}

export default Shop;