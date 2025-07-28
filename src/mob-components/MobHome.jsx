import React from "react";
import { Download } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import ProfileImage from "../assets/image.png";

const MobHome = () => {
  return (
    // Section: Mobile Home
    <section className="flex flex-col items-center text-center px-6 md:hidden">
      <div className="w-40 h-40 rounded-full overflow-hidden mb-6 shadow-lg">
        <img
          src={ProfileImage}
          alt="Profile"
          className="w-full h-full object-cover object-top"
        />
      </div>

      <h1 className="text-white text-2xl font-extrabold mb-4 leading-tight">
        Hi, I'm{" "}
        <TypeAnimation
          sequence={[
            "Vipin Prajapat",
            2500,
            "Frontend Dev",
            2500,
            "UI Designer",
            2500,
          ]}
          speed={50}
          repeat={Infinity}
          className="text-blue-400 inline-block"
          cursor={true}
        />
      </h1>

      <p className="text-white text-base mb-6 leading-relaxed">
        A front-end developer passionate about turning ideas into interactive,
        pixel-perfect web experiences.
      </p>

      <a
        href="/resume.pdf"
        download
        className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-full font-semibold transition"
      >
        <Download className="inline-block mr-2" size={18} />
        My Resume
      </a>
    </section>
  );
};

export default MobHome;
