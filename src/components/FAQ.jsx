import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqData = [
  {
    question: "چگونه فروشگاه خودم را راه‌اندازی کنم؟",
    answer:
      "بعد از ثبت‌نام می‌توانید محصولات خود را آپلود کنید و لینک اختصاصی فروشگاهتان را دریافت کنید.",
  },
  {
    question: "کارمزد فروش چقدر است؟",
    answer:
      "کارمزد هر فروش پس از راه‌اندازی بک‌اند مشخص خواهد شد و قابل تنظیم است.",
  },
  {
    question: "چه فایل‌هایی قابل فروش هستند؟",
    answer:
      "PDF، ZIP، ویدئو، موسیقی، قالب سایت، فایل‌های طراحی، کتاب الکترونیکی و هر فایل دیجیتال دیگر.",
  },
  {
    question: "آیا پرداخت آنلاین امن است؟",
    answer:
      "بله، تمام پرداخت‌ها از طریق درگاه‌های امن انجام می‌شوند.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="faq">
      <div className="section-heading">
        <span>سوالات متداول</span>
        <h2>پاسخ سوالات رایج کاربران</h2>
      </div>

      <div className="faq-list">
        {faqData.map((item, index) => (
          <div className="faq-item" key={index}>
            <button
              className="faq-question"
              onClick={() =>
                setOpenIndex(openIndex === index ? -1 : index)
              }
            >
              <span>{item.question}</span>

              {openIndex === index ? <FiMinus /> : <FiPlus />}
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="faq-answer"
                >
                  <p>{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;