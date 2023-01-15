import React, { useState } from "react";
import { Link } from "react-scroll";

function LpnavBar(props) {
  return (
    <div className="space-x-4 text-gray-200">
      <Link
        to="home"
        spy={true}
        smooth={true}
        className="cursor-pointer hover:font-bold"
      >
        HOME
      </Link>
      <Link
        to="about"
        spy={true}
        smooth={true}
        className="cursor-pointer hover:font-bold"
      >
        ABOUT
      </Link>

      <Link
        to="works"
        spy={true}
        smooth={true}
        className="cursor-pointer hover:font-bold"
      >
        HOME IT WORKS?
      </Link>
      <Link
        to="curriculm"
        spy={true}
        smooth={true}
        className="cursor-pointer hover:font-bold"
      >
        CURRICULM
      </Link>
      <Link
        to="contact"
        spy={true}
        smooth={true}
        className="cursor-pointer hover:font-bold"
      >
        CONTACT US
      </Link>
      <Link
        to="follow"
        spy={true}
        smooth={true}
        className="cursor-pointer hover:font-bold"
      >
        FOLLOW US
      </Link>
    </div>
  );
}

export default LpnavBar;
