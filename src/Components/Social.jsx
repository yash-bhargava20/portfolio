import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Social = () => {
  return (
    <div className="">
      <div className="text-xl flex flex-col items-center gap-4 ">
        <a href="https://twitter.com/" target="_blank" className="">
          <FontAwesomeIcon icon={faXTwitter} />
        </a>
        <a
          href="https://github.com/yash-bhargava20"
          target="_blank"
          className=""
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/yash-bhargava-5082a0220/"
          target="_blank"
          className=""
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </div>
  );
};

export default Social;
