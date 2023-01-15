import React from "react";

function Home() {
  return (
    <div
      id="home"
      className="h-screen w-full p-2 flex flex-col justify-center items-center text-white bg-black"
    >
      <h1 className=" mt-12 sm:mt-40 mb-20 text-4xl  sm:text-8xl text-center">
        Free Software <br></br> Engineering Training
      </h1>
      <p className=" mb-20 sm:mb-40 ml-8 sm:ml-0 ">
        For underprivileged youths, With Guaranteed Job.
      </p>

      <div className=" m-15">
        <a
          className="px-8 py-4  font-4xl bg-white text-gray-800"
          href="www.google.com"
        >
          ENROLL NOW
        </a>
      </div>
    </div>
  );
}

export default Home;
