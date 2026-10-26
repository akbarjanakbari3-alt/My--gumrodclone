import { motion } from "framer-motion";
import {
  FiUser,
  FiShoppingBag,
  FiDownload,
  FiHeart,
  FiSettings,
  FiLogOut,
  FiBarChart2,
  FiDollarSign,
  FiBox,
  FiClock,
} from "react-icons/fi";

function Dashboard() {
  return (
    <main className="dashboard-page">
      <section className="dashboard-layout">

        <aside className="dashboard-sidebar">

          <div className="dashboard-profile">

            <div className="dashboard-avatar">
              EA
            </div>

            <h3>Akbar jan ARYAN</h3>

            <span>Premium Member</span>

          </div>

          <nav className="dashboard-menu">

            <button className="active">
              <FiBarChart2 />
              داشبورد
            </button>

            <button>
              <FiShoppingBag />
              سفارش‌های من
            </button>

            <button>
              <FiDownload />
              دانلودها
            </button>

            <button>
              <FiHeart />
              علاقه‌مندی‌ها
            </button>

            <button>
              <FiUser />
              پروفایل
            </button>

            <button>
              <FiSettings />
              تنظیمات
            </button>

            <button className="logout">
              <FiLogOut />
              خروج
            </button>

          </nav>

        </aside>

        <section className="dashboard-content">

          <motion.div
            className="dashboard-header"
            initial={{ opacity:0,y:30 }}
            animate={{ opacity:1,y:0 }}
          >

            <h1>
              خوش آمدید 👋
            </h1>

            <p>
              خلاصه فعالیت حساب کاربری شما
            </p>

          </motion.div>

          <div className="dashboard-stats">

            <article>
              <FiShoppingBag />
              <strong>18</strong>
              <span>سفارش</span>
            </article>

            <article>
              <FiDownload />
              <strong>41</strong>
              <span>دانلود</span>
            </article>

            <article>
              <FiDollarSign />
              <strong>$540</strong>
              <span>هزینه</span>
            </article>

            <article>
              <FiBox />
              <strong>12</strong>
              <span>محصول</span>
            </article>

          </div>

          <div className="dashboard-recent">

            <h2>آخرین فعالیت</h2>

            <div className="dashboard-activity">

              <FiClock />

              <div>

                <strong>
                  خرید دوره React
                </strong>

                <p>
                  امروز ساعت 12:40
                </p>

              </div>

            </div>

          </div>

        </section>

      </section>
    </main>
  );
}

export default Dashboard;