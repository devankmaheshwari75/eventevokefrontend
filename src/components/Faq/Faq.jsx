import React, { useState } from 'react';
import './Faq.css';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questionsAndAnswers = [
    {
      question: 'How far in advance should I start planning my wedding?',
      answer: 'It is recommended to start planning your wedding at least 12 months in advance.'
    },
    {
      question: 'How can I stay within my wedding budget?',
      answer: 'Create a detailed budget plan and track your expenses regularly.'
    },
    {
      question: 'What should I look for when hiring wedding vendors?',
      answer: 'Check for experience, reviews, and work samples before making a decision.'
    },
    {
        question: 'How far in advance should I start planning my wedding?',
        answer: 'It is recommended to start planning your wedding at least 12 months in advance.'
      },
      {
        question: 'How can I stay within my wedding budget?',
        answer: 'Create a detailed budget plan and track your expenses regularly.'
      },
      {
        question: 'What should I look for when hiring wedding vendors?',
        answer: 'Check for experience, reviews, and work samples before making a decision.'
      },
      {
        question: 'How far in advance should I start planning my wedding?',
        answer: 'It is recommended to start planning your wedding at least 12 months in advance.'
      },
      {
        question: 'How can I stay within my wedding budget?',
        answer: 'Create a detailed budget plan and track your expenses regularly.'
      },
      {
        question: 'What should I look for when hiring wedding vendors?',
        answer: 'Check for experience, reviews, and work samples before making a decision.'
      }
    // ... Add more questions and answers
  ];

  const toggleFAQ = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 >FREQUENTLY ASKED QUESTIONS</h2>
      <ul className="faq-list">
        {questionsAndAnswers.map((item, index) => (
          <li key={index} className="faq-item">
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              {item.question}
              <span className="faq-arrow">{activeIndex === index ? '▼' : '▶'}</span>
            </button>
            <div className={`faq-answer ${activeIndex === index ? 'active' : ''}`}>
              {item.answer}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Faq;
