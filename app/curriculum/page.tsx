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
            Networking And Github Basics
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Networking foundation for how computers communicate over the
            internet and local networks. This includes understanding IP
            addresses, DNS, HTTP/HTTPS, and how data is transferred between
            clients and servers.
            <br />
            Introduction to Github and git mechanism, Creating Github Account
            ,pushing a new repository and creating pull requests.
          </p>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Week 02
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            HTML Basics
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Introduction to HTML (HyperText Markup Language) .How HTML is used
            to structure content on web pages. What are different Tags in HTML
            and their usage.
          </p>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Week 03
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            CSS basics
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Introduction to CSS (Cascading Style Sheets). Different ways of
            styling an element using CSS. Different CSS properties and their
            functionality. Introduction to Box Model
          </p>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Week 04
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Javascript basics
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Introduction to Javascript.Fundamentals of JavaScript, including
            variables, data types, operators, and control structures like loops
            and conditionals. We'll cover functions and basic array methods.
          </p>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Week 05
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Advanced HTML
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Advanced HTML covers semantic elements, accessibility best
            practices. It also includes forms with validation, microdata for
            SEO, and integration with JavaScript and CSS for dynamic content and
            styling.
          </p>
        </li>
      </ol>
    </div>
  );
};

export default page;
