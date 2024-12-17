import { FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import React from "react";

const FooterComponent = () => {
  return (
    <footer className="bg-emerald-800 border-t-2 border-black text-white py-12 px-4 font-sans tracking-wide w-full">
      <div className="text-center max-w-none">
        <h6 className="font-bold text-lg">Stay connected with us</h6>
        <nav className="flex justify-center gap-6 my-6" aria-label="Social Media Links">
          <a
            href="https://www.facebook.com/AhmedTahaII.TechGeek?locale=ar_AR"
            className="text-4xl hover:text-gray-400"
            aria-label="Facebook"
          >
            <FaFacebookSquare />
          </a>
          <a
            href="https://x.com/tech_geek12"
            className="text-4xl hover:text-gray-400"
            aria-label="Twitter"
          >
            <FaTwitterSquare />
          </a>
          <a
            href="https://www.linkedin.com/in/ahmed-mohamed-taha-5a4b49222/"
            className="text-4xl hover:text-gray-400"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/AhmedMohamedTaha2"
            className="text-4xl hover:text-gray-400"
            aria-label="GitHub"
          >
            <FaGithubSquare />
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default FooterComponent;
