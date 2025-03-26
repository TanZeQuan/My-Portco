import React from 'react';
import { RightOutlined } from "@ant-design/icons";

const Experience = () => {
  return (
    <div id='experience' className='flex min-h-screen w-full flex-col items-center justify-center gap-20 p-14 md:p-20 lg:p-36'>
      <h1 className="text-center text-5xl font-light flex items-center justify-center">
        <span className="mr-3">💼</span>
        Work Experience
      </h1>

      <div className="flex flex-wrap gap-0 md:flex-nowrap md:gap-10">
        <div className="flex-1">
          <div className="relative space-y-1 border-l-2 border-gray-300 p-8 text-left">
            <h3 className="text-xl font-semibold text-teal-700 md:text-2xl">Investment Marketing</h3>
            <p className="font-light text-lg text-gray-600">June 2022 - Feb 2023</p>
            <ul className="list-none text-sm text-gray-600">
              <li className="flex items-center">
                <RightOutlined className="text-gray-500 mr-2 pb-5" />
                Develop and implement targeted Forex trading marketing campaigns.
              </li>
              <li className="flex items-center">
                <RightOutlined className="text-gray-500 mr-2 pb-5" />
                Promote trading platforms, signal services, and investment opportunities.
              </li>
              <li className="flex items-center">
                <RightOutlined className="text-gray-500 mr-2 pb-5" />
                Optimize campaigns for lead generation and client retention.
              </li>
            </ul>
            <span className='absolute -left-3 top-10 h-5 w-5 rounded-full bg-teal-500 border-2'></span>
          </div>

          <div className="relative space-y-1 border-l-2 border-gray-300 p-8 text-left">
            <h3 className="text-xl font-semibold text-teal-700 md:text-2xl">Website Revamp & Maintenance (Internship)</h3>
            <p className="font-light text-lg text-gray-600">July 2023 – October 2023</p>
            <ul className="list-none text-sm text-gray-600">
              <li className="flex items-center">
                <RightOutlined className="text-gray-500 mr-2 pb-5" />
                Edit and update website content, images, and layouts on Wix.
              </li>
              <li className="flex items-center">
                <RightOutlined className="text-gray-500 mr-2 pb-5" />
                Ensure website functionality, responsiveness, and performance.
              </li>
              <li className="flex items-center">
                <RightOutlined className="text-gray-500 mr-2 pb-2" />
                Monitor and troubleshoot minor technical issues.
              </li>
              <li className="flex items-center">
                <RightOutlined className="text-gray-500 mr-2 pb-5" />
                Work with design tools (Wix Editor, Canvas) to enhance UI/UX.
              </li>
            </ul>
            <span className='absolute -left-3 top-10 h-5 w-5 rounded-full bg-teal-500 border-2'></span>
          </div>

          <div className="relative space-y-1 border-l-2 border-gray-300 p-8 text-left">
            <h3 className="text-xl font-semibold text-teal-700 md:text-2xl">Warehouse Packing & Admin</h3>
            <p className="font-light text-lg text-gray-600">July 2024 – August 2024</p>
            <ul className="list-none text-sm text-gray-600">
              <li className="flex items-center">
                <RightOutlined className="text-gray-500 mr-2 pb-2" />
                Pack, label, and prepare products for shipping.
              </li>
              <li className="flex items-center">
                <RightOutlined className="text-gray-500 mr-2 pb-5" />
                Organize stock and maintain a clean warehouse environment.
              </li>
              <li className="flex items-center">
                <RightOutlined className="text-gray-500 mr-2 pb-5" />
                Assist in processing orders, invoices, and shipping documentation.
              </li>
            </ul>
            <span className='absolute -left-3 top-10 h-5 w-5 rounded-full bg-teal-500 border-2'></span>
          </div>
        </div>

        <div className="flex-1">
          <div className="relative space-y-1 border-l-2 border-gray-300 p-8 text-left">
            <h3 className="text-xl font-semibold text-teal-700 md:text-2xl">Freelancer (Web design)</h3>
            <p className="font-light text-lg text-gray-600">2025 - Present</p>
            <ul className="list-none text-sm text-gray-600">
              <li className="flex items-center">
                <RightOutlined className="text-gray-500 mr-2 pb-5" />
                Design and develop responsive websites using Wix and WordPress.
              </li>
              <li className="flex items-center">
                <RightOutlined className="text-gray-500 mr-2 pb-5" />
                Customize themes, layouts, and templates to fit client branding.
              </li>
              <li className="flex items-center">
                <RightOutlined className="text-gray-500 mr-2 pb-2" />
                Ensure websites are mobile-friendly.
              </li>
            </ul>
            <span className='absolute -left-3 top-10 h-5 w-5 rounded-full bg-teal-500 border-2'></span>
          </div>

          <div className="relative space-y-1 border-l-2 border-gray-300 p-8 text-left">
            <h3 className="text-xl font-semibold text-teal-700 md:text-2xl">Crypto Payment Wallet Application</h3>
            <p className="font-light text-lg text-gray-600">2025 - Present</p>
            <ul className="list-none text-sm text-gray-600">
              <li className="flex items-center">
                <RightOutlined className="text-gray-500 mr-2 pb-5" />
                Assist in designing and developing intuitive and responsive wallet interfaces.
              </li>
              <li className="flex items-center">
                <RightOutlined className="text-gray-500 mr-2 pb-5" />
                Implement modern UI components using React.js, Next.js, Node.js, Tailwind css.
              </li>
              <li className="flex items-center">
                <RightOutlined className="text-gray-500 mr-2 pb-5" />
                Work with back-end developers to ensure seamless data flow.
              </li>
            </ul>
            <span className='absolute -left-3 top-10 h-5 w-5 rounded-full bg-teal-500 border-2'></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
