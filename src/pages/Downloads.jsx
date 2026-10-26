import { motion } from "framer-motion";
import {
  FiDownload,
  FiFileText,
  FiClock,
  FiCheckCircle,
} from "react-icons/fi";

function Downloads() {
  const downloads = [
    {
      id: 1,
      title: "React Master Course",
      size: "2.4 GB",
      status: "ready",
    },
    {
      id: 2,
      title: "UI Design Kit",
      size: "850 MB",
      status: "ready",
    },
    {
      id: 3,
      title: "Node.js API Course",
      size: "1.8 GB",
      status: "processing",
    },
  ];

  return (
    <main className="downloads-page">
      <motion.div
        className="downloads-header"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1>دانلودهای من</h1>

        <p>
          تمامی فایل‌های خریداری‌شده از این قسمت قابل دانلود هستند.
        </p>
      </motion.div>

      <section className="downloads-list">
        {downloads.map((item) => (
          <article
            key={item.id}
            className="download-card"
          >
            <div className="download-main">
              <FiFileText />

              <div>
                <strong>{item.title}</strong>

                <span>{item.size}</span>
              </div>
            </div>

            <div className="download-status">
              {item.status === "ready" ? (
                <>
                  <FiCheckCircle />
                  آماده دانلود
                </>
              ) : (
                <>
                  <FiClock />
                  در حال آماده‌سازی
                </>
              )}
            </div>

            <button className="download-btn">
              <FiDownload />
              دانلود
            </button>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Downloads;