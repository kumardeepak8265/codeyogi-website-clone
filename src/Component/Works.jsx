import React from "react";

function Methodology(props) {
  return (
    <div id="works" className=" pt-16 ">
      <div className="flex p-4 sm:mx-16 flex-col sm:flex-row ">
        <div>
          <div className="sm:p-12  flex flex-col items-center space-y-4">
            <img
              className="w-20 "
              src="https://cdn-icons-png.flaticon.com/512/35/35920.png"
            />
            <h2 className="text-2xl">STRICT VETTING</h2>
            <p className="text-gray-500">
              Our goal is not to run hobby classNames but instead to create job
              ready candidates. So we are selective in who we train. We conduct
              a mathematical aptitude test to filter out students who have the
              raw talent needed for a successful software engineering career.
              Then we take personal interview to check if they have strong will
              needed to achieve their dreams.
            </p>
          </div>

          <div className="sm:p-12  flex flex-col items-center  space-y-4 ">
            <img
              className="w-20"
              src="https://cdn.discordapp.com/attachments/960386781780508732/1001539789478170708/IMG_20220726_224508.jpg"
            />
            <h2 className="text-2xl">SOFT SKILLS COACHING</h2>
            <p className="text-gray-500">
              We understand how important 'people skills' are for a successful
              career. That's why soft skills coaching is an integral part of our
              curriculum. We have a continuous feedback process in place to help
              you improve and grow.
            </p>
          </div>
        </div>

        <div>
          <div className="sm:p-12  flex flex-col items-center  space-y-4">
            <img
              className="w-20 "
              src="https://cdn5.vectorstock.com/i/1000x1000/98/24/target-icon-symbol-flat-vector-5329824.jpg"
            />
            <h2 className="text-2xl">RIGOROUS TRAINING</h2>
            <p className="text-gray-500">
              Selected students are trained rigorously for 6 months under the
              guidance of experienced mentors and teaching assistants. It’s not
              passive teaching; instead students build a number of apps as part
              of the curriculum. We keep our curriculum in constant sync with
              industry needs so that students are not taught anything obsolete
              in this fast moving tech world.
            </p>
          </div>

          <div className="sm:p-12  flex flex-col items-center  space-y-4">
            <img
              className="w-20"
              src="https://cdn.discordapp.com/attachments/960386781780508732/1001539789855653888/IMG_20220726_224438.jpg"
            />
            <h2 className="text-2xl">PLACEMENT ASSISTANCE</h2>
            <p className="text-gray-500">
              conduct mock interviews and group discussions to instil confidence
              in students. Once the training is complete we help them in getting
              the right jobs by arranging interviews with our partner employers.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-black  flex ">
        <div className=" sm:w-1/2  space-y-4 p-4 flex flex-col justify-center ">
          <h3 className=" text-gray-300">Help us in helping them</h3>

          <p className=" text-gray-400">
            If there are 12th pass underprivileged youth around you who are
            eager to work hard to change their lives, please let us know.
          </p>

          <a href="www.google.com" className="px-4 py-2 bg-gray-400 w-40">
            Let's talk
          </a>
        </div>
        <div className=" sm:w-1/2  -mt-8">
          <img src="https://codeyogi.io/images/promo-1.jpg" />
        </div>
      </div>

      <div className="h-80 px-4 sm:px-16 ">
        <h2 className=" text-3xl  flex flex-col justify-center items-center mt-12 mb-12 ">
          Our Motivation ?
        </h2>
        <div className="flex flex-col justify-start space-y-8">
          <div className=" ">This Quote from Talmud is our guiding force:</div>
          <div className=" ">
            Do not be daunted by the enormity of the world's grief. Do justly
            now, love mercy now, walk humbly now. You are not obligated to
            complete the work, but neither are you free to abandon it.
          </div>
          <div className=" ">
            So we are just honestly trying to do our bit to help achieve
            equality of opportunity.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Methodology;
