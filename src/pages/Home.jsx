import Newsletter from "../components/Newsletter";
import CTA from "../components/CTA";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import Creators from "../components/Creators";
import Testimonials from "../components/Testimonials";

const sectionAnimation = {
  initial: {
    opacity: 0,
    y: 70,
  },

  whileInView: {
    opacity: 1,
    y: 0,
  },

  viewport: {
    once: true,
    amount: 0.15,
  },

  transition: {
    duration: 0.8,
    ease: "easeOut",
  },
};

const cardContainerAnimation = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardAnimation = {
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
};

function Home() {
  return (
    <main>
      {/* Hero */}

      <motion.section
        className="hero"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.9,
          ease: "easeOut",
        }}
      >
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: "easeOut",
          }}
        >
          <motion.span
            className="hero-label"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.35,
            }}
          >
            فروش ساده محصولات دیجیتال
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.4,
              ease: "easeOut",
            }}
          >
            دانش و خلاقیت خودت را به درآمد تبدیل کن.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.55,
              ease: "easeOut",
            }}
          >
            فروشگاه شخصی خودت را بساز، فایل‌ها و محصولات دیجیتال را منتشر کن و
            مستقیم به مشتریان بفروش.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.7,
              ease: "easeOut",
            }}
          >
            <motion.button
              type="button"
              className="hero-primary-btn"
              whileHover={{
                y: -4,
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
            >
              شروع فروش
            </motion.button>

            <motion.button
              type="button"
              className="hero-secondary-btn"
              whileHover={{
                y: -4,
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
            >
              مشاهده محصولات
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-card"
          initial={{
            opacity: 0,
            x: -60,
            rotate: -8,
          }}
          animate={{
            opacity: 1,
            x: 0,
            rotate: -2,
          }}
          transition={{
            duration: 0.9,
            delay: 0.4,
            ease: "easeOut",
          }}
          whileHover={{
            y: -10,
            rotate: 0,
          }}
        >
          <div className="hero-card-image">
            <span>محصول دیجیتال</span>
          </div>

          <div className="hero-card-content">
            <span className="hero-card-category">آموزش طراحی</span>

            <h3>دوره کامل طراحی رابط کاربری</h3><p>آموزش پروژه‌محور طراحی سایت و اپلیکیشن</p>

            <div className="hero-card-footer">
              <strong>۴۹۰ هزار تومان</strong>

              <motion.button
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
              >
                خرید محصول
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Categories */}

      <motion.section className="categories" {...sectionAnimation}>
        <div className="section-heading">
          <span>دسته‌بندی‌ها</span>
          <h2>محصول موردنظرت را پیدا کن</h2>
        </div>

        <motion.div
          className="category-list"
          variants={cardContainerAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >
          <motion.article
            className="category-card category-yellow"
            variants={cardAnimation}
            whileHover={{
              y: -10,
              scale: 1.01,
            }}
          >
            <span className="category-number">۰۱</span>
            <h3>آموزش</h3>
            <p>دوره‌ها، ویدئوها و فایل‌های آموزشی کاربردی</p>
          </motion.article>

          <motion.article
            className="category-card category-pink"
            variants={cardAnimation}
            whileHover={{
              y: -10,
              scale: 1.01,
            }}
          >
            <span className="category-number">۰۲</span>
            <h3>طراحی</h3>
            <p>قالب سایت، فونت، آیکون و فایل‌های گرافیکی</p>
          </motion.article>

          <motion.article
            className="category-card category-green"
            variants={cardAnimation}
            whileHover={{
              y: -10,
              scale: 1.01,
            }}
          >
            <span className="category-number">۰۳</span>
            <h3>کتاب دیجیتال</h3>
            <p>کتاب‌ها، جزوه‌ها و راهنماهای تخصصی</p>
          </motion.article>
        </motion.div>
      </motion.section>

      {/* Products */}

      <motion.section className="products" {...sectionAnimation}>
        <div className="section-heading">
          <span>محصولات محبوب</span>
          <h2>پرفروش‌ترین محصولات این هفته</h2>
        </div>

        <motion.div
          className="product-list"
          variants={cardContainerAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
        >
          <motion.article
            className="product-card"
            variants={cardAnimation}
            whileHover={{
              y: -10,
            }}
          >
            <div className="product-image product-purple">
              آموزش React
            </div>

            <div className="product-content">
              <span>برنامه‌نویسی</span>
              <h3>دوره جامع آموزش React</h3>
              <p>آموزش پروژه‌محور از مقدماتی تا پیشرفته</p>

              <div className="product-footer">
                <strong>۵۹۰ هزار تومان</strong>

                <motion.button
                  type="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                >
                  مشاهده
                </motion.button>
              </div>
            </div>
          </motion.article>

          <motion.article
            className="product-card"
            variants={cardAnimation}
            whileHover={{
              y: -10,
            }}
          >
            <div className="product-image product-orange">
              قالب فروشگاهی
            </div>

            <div className="product-content">
              <span>طراحی سایت</span>
              <h3>قالب فروشگاهی حرفه‌ای</h3>
              <p>قالب آماده، سریع و کاملاً ریسپانسیو</p>

              <div className="product-footer">
                <strong>۳۹۰ هزار تومان</strong><motion.button
                  type="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                >
                  مشاهده
                </motion.button>
              </div>
            </div>
          </motion.article>

          <motion.article
            className="product-card"
            variants={cardAnimation}
            whileHover={{
              y: -10,
            }}
          >
            <div className="product-image product-blue">
              کتاب دیجیتال
            </div>

            <div className="product-content">
              <span>کسب‌وکار</span>
              <h3>راهنمای فروش محصولات دیجیتال</h3>
              <p>از ساخت محصول تا جذب مشتری و فروش آنلاین</p>

              <div className="product-footer">
                <strong>۱۹۰ هزار تومان</strong>

                <motion.button
                  type="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                >
                  مشاهده
                </motion.button>
              </div>
            </div>
          </motion.article>
        </motion.div>
      </motion.section>

      {/* Statistics */}

      <motion.section className="features" {...sectionAnimation}>
        <motion.div
          className="feature-card"
          variants={cardAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2>۱۰٬۰۰۰+</h2>
          <p>محصول دیجیتال منتشرشده</p>
        </motion.div>

        <motion.div
          className="feature-card"
          variants={cardAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <h2>۵٬۰۰۰+</h2>
          <p>فروشنده فعال</p>
        </motion.div>

        <motion.div
          className="feature-card"
          variants={cardAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h2>۹۸٪</h2>
          <p>رضایت کاربران</p>
        </motion.div>

        <motion.div
          className="feature-card"
          variants={cardAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h2>۲۴/۷</h2>
          <p>پشتیبانی آنلاین</p>
        </motion.div>
      </motion.section>

      {/* Creators */}

      <motion.div {...sectionAnimation}>
        <Creators />
      </motion.div>

      {/* Testimonials */}

      <motion.div {...sectionAnimation}>
        <Testimonials />
      </motion.div>
      <motion.div
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.8 }}
>
  <CTA />
</motion.div>
      <motion.div
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.15 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  <FAQ />
</motion.div>
<motion.div
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.8 }}
>
  <Newsletter />
</motion.div>
      <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
  <Footer />
</motion.div>
    </main>
  );
}

export default Home;