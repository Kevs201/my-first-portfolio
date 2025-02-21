import { assets, infoList, toolsData } from "../../assets/assets";
import Image from "next/image";
import React from "react";
import { useState } from "react";

const About = ({isDarkMode}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Function to toggle the read more/less
  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-Ovo">About me</h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src={assets.profile2}
            alt="user"
            className="w-full rounded-3xl"
          />
        </div>
        <div className="flex-1">
          <p className=" mx-auto font-Ovo">
            I am a front-end developer with some knowledge of back-end
            technologies. I recently graduated with a Bachelor of Science in
            Information Systems (BSIS)...
            {/* Extra content */}
            {isExpanded && (
              <span className="font-Ovo">
                and have gained practical experience through several projects.
                During my studies, I developed a strong foundation in web
                development and honed my skills in both front-end and back-end
                development. I am passionate about building interactive and
                user-friendly applications and am eager to continue growing in
                the field of software development.
              </span>
            )}
            {/* Read More / Read Less button */}
            <button
              onClick={toggleText}
              className="text-blue-500 mt-2 font-Outfit ml-2"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          </p>
          <br />
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black
                dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover"
                key={index}
              >
                <Image src={isDarkMode ? iconDark : icon} alt={title} className="w-7 m-3" />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white/80">{title}</h3>
                <p className="text-gray-600 text-sm dark:text-white/70">{description}</p>
              </li>
            ))}
          </ul>

          <h4 className="my-6 text-gray-700 font-Ovo dark:text-blue-400">Tools I use</h4>

          <ul className="flex items-center gap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
              <li
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer " 
                key={index}
              >
                <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
