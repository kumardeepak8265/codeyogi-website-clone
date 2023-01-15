import React from "react";

function About(props) {
  return (
    <div
      id="about"
      className="flex flex-col h-screen border-b border-gray-600 items-center justify-center mx-4 sm:mx-16 space-y-12"
    >
      <h1 className="text-2xl ">WHAT WE DO?</h1>
      <p className="text-gray-600">
        CodeYogi offers a totally free 6 months long software engineering
        training program that guarantees job to youth from low-income families.
      </p>
      <p className="text-gray-600">
        All of our trainers are IIT graduates with stints at pioneering
        companies of the tech world. With our extensive network in the industry
        we scout the right jobs for our students and help them succeed.
      </p>
    </div>
  );
}

export default About;
