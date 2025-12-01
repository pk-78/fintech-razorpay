import React, { useState } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowUp } from "react-icons/md";

/**
 * AccordionItem component: displays a question and toggles answer visibility.
 */
const AccordionItem = ({ question, answer, isExpanded, onToggle }) => {
  return (
    <div className="py-1 rounded-2xl">
      <button
        onClick={onToggle}
        className={`w-full flex justify-between rounded-2xl items-center px-4 py-3 focus:outline-none transition-colors duration-200 
          ${
            isExpanded
              ? "bg-[#252525] rounded-b-none text-white"
              : "bg-[#e9f6ed] text-black hover:bg-green-200"
          }`}
      >
        <span className="text-left font-medium">{question}</span>
        {isExpanded ? (
          <MdKeyboardArrowRight className="w-5 h-5" />
        ) : (
          <MdKeyboardArrowUp className="w-5 h-5" />
        )}
      </button>
      {isExpanded && (
        <div className="px-4 py-3 bg-white rounded-b-2xl text-black">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default function PaymentFAQ({ faqsLeft = [], faqsRight = [] }) {

  const [expandedLeft, setExpandedLeft] = useState(0);
  const [expandedRight, setExpandedRight] = useState(0);

  const handleToggleLeft = (index) => {
    setExpandedLeft((prev) => (prev === index ? -1 : index));
  };
  const handleToggleRight = (index) => {
    setExpandedRight((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="max-w-screen-xl mx-auto px-4 py-8">
      {/* Subtitle */}
      <div className="text-center">
        <div className="text-green-500 font-bold text-xl uppercase ">
          Payment Questions
        </div>
        <h2 className="mt-2 text-2xl  font-bold text-white">
          Most Popular Questions
        </h2>
      </div>

      {/* Two-column layout */}
      <div className="mt-6 py-1 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div>
          {faqsLeft.map((faq, idx) => (
            <AccordionItem
              key={idx}
              question={faq.question}
              answer={faq.answer}
              isExpanded={expandedLeft === idx}
              onToggle={() => handleToggleLeft(idx)}
            />
          ))}
        </div>

        {/* Right Column */}
        <div>
          {faqsRight.map((faq, idx) => (
            <AccordionItem
              key={idx}
              question={faq.question}
              answer={faq.answer}
              isExpanded={expandedRight === idx}
              onToggle={() => handleToggleRight(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
