import React, { memo } from "react";
import { Link } from "react-scroll";

function MbnavBar({ MobileViesUp }) {
  return (
    <div className=" w-full h-screen flex flex-col space-y-4 md:hidden mx-2">
      <Link
        to="home"
        smooth
        offset={-600}
        duration={500}
        className="cursor-pointer hover:font-bold"
        onClick={MobileViesUp}
      >
        HOME
      </Link>
      <hr className="sm:hidden"></hr>
      <Link
        to="about"
        spy={true}
        duration={500}
        offset={-600}
        smooth={true}
        onClick={MobileViesUp}
        className="cursor-pointer hover:font-bold"
      >
        ABOUT
      </Link>
      <hr className="sm:hidden"></hr>

      <Link
        to="works"
        offset={-600}
        spy={true}
        smooth={true}
        className="cursor-pointer hover:font-bold"
        onClick={MobileViesUp}
      >
        HOME IT WORKS?
      </Link>
      <hr className="sm:hidden"></hr>
      <Link
        to="curriculm"
        offset={-600}
        spy={true}
        smooth={true}
        onClick={MobileViesUp}
        className="cursor-pointer hover:font-bold"
      >
        CURRICULM
      </Link>
      <hr className="sm:hidden"></hr>
      <Link
        to="contact"
        offset={-600}
        spy={true}
        smooth={true}
        className="cursor-pointer hover:font-bold"
        onClick={MobileViesUp}
      >
        CONTACT US
      </Link>
      <hr className="sm:hidden"></hr>
      <Link spy={true} smooth={true} className="cursor-pointer hover:font-bold">
        FOLLOW US
      </Link>
    </div>
  );
}

export default memo(MbnavBar);
