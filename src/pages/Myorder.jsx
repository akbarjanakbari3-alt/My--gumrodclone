import { motion } from "framer-motion";
import {
  FiPackage,
  FiCalendar,
  FiCreditCard,
  FiCheckCircle,
  FiClock,
  FiEye,
} from "react-icons/fi";

function MyOrders() {
  const orders = [
    {
      id: "#10025",
      product: "React Master Course",
      date: "2026/07/28",
      price: "$89",
      status: "completed",
    },
    {
      id: "#10024",
      product: "UI Design Pack",
      date: "2026/07/20",
      price: "$39",
      status: "processing",
    },
    {
      id: "#10023",
      product: "Node.js API Course",
      date: "2026/07/12",
      price: "$59",
      status: "completed",
    },
  ];

  return (
    <main className="orders-page">
      <motion.div
        className="orders-header"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1>سفارش‌های من</h1>
        <p>لیست تمامی سفارش‌های ثبت‌شده در حساب کاربری</p>
      </motion.div>

      <section className="orders-list">
        {orders.map((order) => (
          <article key={order.id} className="order-card">
            <div className="order-main">
              <FiPackage />

              <div>
                <strong>{order.product}</strong>
                <span>{order.id}</span>
              </div>
            </div>

            <div className="order-meta">
              <span>
                <FiCalendar />
                {order.date}
              </span>

              <span>
                <FiCreditCard />
                {order.price}
              </span>

              <span>
                {order.status === "completed" ? (
                  <>
                    <FiCheckCircle />
                    تکمیل شده
                  </>
                ) : (
                  <>
                    <FiClock />
                    در حال پردازش
                  </>
                )}
              </span>
            </div>

            <button className="order-view-btn">
              <FiEye />
              مشاهده سفارش
            </button>
          </article>
        ))}
      </section>
    </main>
  );
}

export default MyOrders;