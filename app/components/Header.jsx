import { assets } from "../../assets/assets";
import Image from "next/image";
import React, { useState } from "react";

const Header = () => {
  // State to toggle read more functionality
  const [isExpanded, setIsExpanded] = useState(false);

  // Function to toggle the read more/less
  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <div>
        <Image src={assets.profile} alt="" className="rounded-full" height={100} width={100}/>
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        Hi! I'm Labayo Kevin
        <Image src={assets.hand_icon} alt="" className="rounded-full w-6" />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo capitalize">
        frontend web developer and digital artist.
      </h1>
      {/* Description with "Read More" functionality */}
      <p className="max-w-2xl mx-auto font-Ovo">
        I am a front-end developer with some knowledge of back-end technologies.
        I recently graduated with a Bachelor of Science in Information Systems
        (BSIS)... <a href="#about" className="text-blue-500">Read more</a>
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent"
        >
          Contact me
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </a>
        <a
          href="/KevinLabayo.pdf"
          target='_blank'
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black"
        >
          my resume <Image src={assets.download_icon} alt="" className="w-4" />
        </a>
      </div>
    </div>
  );
};

export default Header;
