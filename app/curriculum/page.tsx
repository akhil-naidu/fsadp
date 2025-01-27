import React from 'react';

const page = () => {
  return (
    <div className="lg:container flex items-center justify-center md:max-w-2xl">
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Week 01
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Foundational Concepts
          </h3>
          <li className="pt-2">Introduction to HTML & CSS</li>
          <li className="pt-2">What is HTML? What is CSS?</li>
          <li className="pt-2">
            Basic HTML structure CSS Basics (Inline, Internal, External CSS)
          </li>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Week 02
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            HTML & CSS Fundamentals
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            <li className="pt-2">
              Text Formatting, Lists, Links, Images, Tables
            </li>
            <li className="pt-2">Forms & Input Elements</li>
            <li className="pt-2">Selectors & Specificity</li>
            <li className="pt-2">
              Box Model (Margin, Padding, Border, Content)
            </li>
            <li className="pt-2">Colors & Backgrounds</li>
            <li className="pt-2">Typography (Fonts, Text Styling)</li>
          </p>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Week 03
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Intermediate HTML & CSS
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            <li className="pt-2">Semantic HTML</li>
            <li className="pt-2">Media & Embedding</li>
            <li className="pt-2">Attaching HTML and CSS in different ways</li>
            <li className="pt-2">Flexbox & Grid Layout</li>
            <li className="pt-2">Positioning & Display Properties</li>
            <li className="pt-2">Transitions & Animations</li>
          </p>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Week 04
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Advanced Concepts
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            <li className="pt-2">Performance Optimization</li>
            <li className="pt-2">Forms Validation</li>
            <li className="pt-2">Web Components</li>
            <li className="pt-2">
              Responsive Design (Media Queries, Mobile-First Approach)
            </li>
            <li className="pt-2">
              CSS Variables & Preprocessors (SASS Basics)
            </li>
            <li className="pt-2">Attaching Javascript and HTML </li>
          </p>
        </li>
      </ol>
    </div>
  );
};

export default page;
