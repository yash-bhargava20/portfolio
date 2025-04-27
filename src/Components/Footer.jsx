import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="z-10 relative text-white py-10 font-poppins  text-lg">
      <div className="w-full max-w-7xl mx-auto ">
        <div className="border-t border-gray-600 my-6"></div>

        <div className=" flex flex-col md:flex-row justify-between items-center mb-4">
          <div>
            <p className="text-sm md:text-left">
              &copy; 2025 Yash Bhargava. All rights reserved.
            </p>
          </div>
          <div>
            <ul className="flex gap-6 text-lg">
              <li>
                <a href="https://github.com/yash-bhargava20" className="">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/yash-bhargava-5082a0220/"
                  className=""
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              {/* <li>
                <a href="" className="">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li> */}
              <li>
                <a
                  href="https://www.instagram.com/yash__bhargava_/?hl=en"
                  className=""
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/">
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-4 text-gray-400 text-lg">
          <p>
            Designed & Developed by
            <span className="font-semibold text-white"> Yash Bhargava</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
