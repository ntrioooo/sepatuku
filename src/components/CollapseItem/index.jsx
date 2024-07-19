import React, { useState } from 'react';

export default function CollapseItem({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="border-y border-gray-200">
      <h2 className="mb-0">
        <button
          type="button"
          className="flex items-center justify-between w-full py-2 font-medium rtl:text-right text-gray-500 border-b-0 rounded-t-xl focus:ring-4 focus:ring-gray-200 hover:bg-gray-100gap-3"
          onClick={toggleAccordion}
          aria-expanded={isOpen}
          aria-controls={`accordion-body-${title}`}
        >
          <span>{title}</span>
          <svg
            className={`w-3 h-3 transform ${
              isOpen ? 'rotate-180' : ''
            } shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id={`accordion-body-${title}`}
        className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="py-2 border-t border-gray-200">
          <p className="mb-2 text-gray-500 dark:text-gray-400 text-sm">{content}</p>
        </div>
      </div>
    </div>
  );
}
