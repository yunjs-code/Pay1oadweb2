import React, { useState } from 'react';
import './Contact.css';

const faqs = [
  { question: '질문', answer: '대답' },
  { question: '질문', answer: '대답' },
  { question: '질문', answer: '대답' },
  { question: '질문', answer: '대답' },
  { question: '질문', answer: '대답' },
  { question: '질문', answer: '대답' },
  { question: '질문', answer: '대답' },
];

const Contact = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1>자주 묻는 질문</h1>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <span>Q</span> {faq.question}
              <span className="faq-icon">{activeIndex === index ? '-' : '+'}</span>
            </div>
            <div className="faq-answer">{faq.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;
