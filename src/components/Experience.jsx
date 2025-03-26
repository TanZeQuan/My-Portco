import React from 'react';
import { RightOutlined } from "@ant-design/icons";

const Experience = () => {
  return (
    <div id='experience' className='flex min-h-screen w-full flex-col items-center justify-center gap-16 px-12 py-16 sm:px-10 md:px-16 lg:px-36'>
      <h1 className="text-center text-4xl sm:text-5xl font-light flex items-center justify-center">
        <span className="mr-3">💼</span>
        Work Experience
      </h1>

      <div className="flex flex-col md:flex-row gap-10 w-full">
        <div className="flex-1 space-y-10">
          {/** Investment Marketing */}
          <ExperienceCard 
            title="Investment Marketing"
            date="June 2022 - Feb 2023"
            tasks={[
              "Develop and implement targeted Forex trading marketing campaigns.",
              "Promote trading platforms, signal services, and investment opportunities.",
              "Optimize campaigns for lead generation and client retention."
            ]}
          />

          {/** Website Revamp & Maintenance */}
          <ExperienceCard 
            title="Website Revamp & Maintenance (Internship)"
            date="July 2023 – October 2023"
            tasks={[
              "Edit and update website content, images, and layouts on Wix.",
              "Ensure website functionality, responsiveness, and performance.",
              "Monitor and troubleshoot minor technical issues.",
              "Work with design tools (Wix Editor, Canvas) to enhance UI/UX."
            ]}
          />

          {/** Warehouse Packing & Admin */}
          <ExperienceCard 
            title="Warehouse Packing & Admin"
            date="July 2024 – August 2024"
            tasks={[
              "Pack, label, and prepare products for shipping.",
              "Organize stock and maintain a clean warehouse environment.",
              "Assist in processing orders, invoices, and shipping documentation."
            ]}
          />
        </div>

        <div className="flex-1 space-y-10">
          {/** Freelancer (Web Design) */}
          <ExperienceCard 
            title="Freelancer (Web Design)"
            date="2025 - Present"
            tasks={[
              "Design and develop responsive websites using Wix and WordPress.",
              "Customize themes, layouts, and templates to fit client branding.",
              "Ensure websites are mobile-friendly."
            ]}
          />

          {/** Crypto Payment Wallet Application */}
          <ExperienceCard 
            title="Crypto Payment Wallet Application"
            date="2025 - Present"
            tasks={[
              "Assist in designing and developing intuitive and responsive wallet interfaces.",
              "Implement modern UI components using React.js, Next.js, Node.js, Tailwind CSS.",
              "Work with back-end developers to ensure seamless data flow."
            ]}
          />
        </div>
      </div>
    </div>
  );
};

const ExperienceCard = ({ title, date, tasks }) => (
  <div className="relative space-y-3 border-l-2 border-gray-300 px-6 py-4 sm:py-6 text-left">
    <h3 className="text-lg sm:text-xl font-semibold text-teal-700">{title}</h3>
    <p className="text-sm sm:text-lg font-light text-gray-600">{date}</p>
    <ul className="list-none text-sm text-gray-600">
      {tasks.map((task, index) => (
        <li key={index} className="flex items-start">
          <RightOutlined className="text-gray-500 mr-2 pt-1" />
          {task}
        </li>
      ))}
    </ul>
    <span className='absolute -left-3 top-8 h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-teal-500 border-2'></span>
  </div>
);

export default Experience;
