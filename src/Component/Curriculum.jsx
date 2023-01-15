import React from "react";

function Curriculum(props) {
  return (
    <div id="curriculm" className="pt-20">
      <div className="p-4 flex flex-col justify-center items-center space-y-16">
        <h1 className="text-3xl ml-12 sm:ml-12 ">WHAT DO WE TEACH?</h1>

        <div className="space-y-16 ">
          <div className="flex flex-col sm:flex-row space-x-8">
            <div className="flex flex-col justify-center items-center space-y-4">
              <img
                className="w-20"
                src="https://cdn.discordapp.com/attachments/960386781780508732/1001539716119789640/IMG_20220726_224931.jpg"
              />
              <h2 className="text-gray-800">HTML, CSS</h2>
              <p className="text-gray-600">
                Get started with Web development by learning HTML & CSS. Learn
                how to build responsive websites that work well across browsers.
              </p>
            </div>

            <div className="flex flex-col justify-center items-center  space-y-4 ">
              <img
                className="w-20"
                src="https://cdn.discordapp.com/attachments/960386781780508732/1001539716681838723/IMG_20220726_224821.jpg"
              />
              <h2 className="text-gray-800">NODE.JS</h2>
              <p className="text-gray-600">
                Learn how to create REST APIs using Node.js, Express.js and
                AdonisJs. Learn Async programming as well as MVC architecture.
              </p>
            </div>

            <div className="flex flex-col justify-center items-center space-y-4 ">
              <img
                className="w-20"
                src="https://cdn.discordapp.com/attachments/960386781780508732/1001539715360632832/IMG_20220726_224954.jpg"
              />
              <h2 className="text-gray-800">JAVASCRIPT, TYPESCRIPT</h2>
              <p className="text-gray-600">
                Learn JS as your first programming language and then move to TS.
                Write code to do simple tasks like printing patterns to get
                comfortable with coding.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row space-x-8">
            <div className="flex flex-col justify-center items-center space-y-4">
              <img
                className="w-20"
                src="https://cdn.discordapp.com/attachments/960386781780508732/1001539716962848768/IMG_20220726_224744.jpg"
              />
              <h2 className="text-gray-800">RELATIONAL DATABASES</h2>
              <p className="text-gray-600">
                earn SQL and also learn how to translate business requirements
                into database schema. Also learn Lucid/Sequelize ORM.
              </p>
            </div>

            <div className="flex flex-col justify-center items-center space-y-4">
              <img
                className="w-20"
                src="https://cdn.discordapp.com/attachments/960386781780508732/1001539716405010532/IMG_20220726_224903.jpg"
              />
              <h2 className="text-gray-800">REACT, REDUX</h2>
              <p className="text-gray-600">
                Learn how to use React to create SPAs with especial emphasis on
                code reusability. Also learn effective state management using
                Redux.
              </p>
            </div>

            <div className="flex flex-col justify-center items-center space-y-4">
              <img
                className="w-20"
                src="https://cdn.discordapp.com/attachments/960386781780508732/1001539717667504228/IMG_20220726_224725.jpg"
              />
              <h2 className="text-gray-800">GIT, CI/CD, AWS</h2>
              <p className="text-gray-600">
                Learn version controlling using git. Also learn CI/CD using
                tools like AWS Amplify, AWS CodeCommit and CodeBuild.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-80 bg-gray-200 w-full flex flex-col justify-center items-center ">
        <div className="flex flex-col justify-start space-y-4">
          <h1 className="text-3xl text-gray-800">
            STAY INFORMED WITH OUR NEWSLETTER
          </h1>
          <input
            placeholder="someone@gamil.com"
            className="w-44 bg-white text-gray-600 px-4  py-2 cursor-pointer border-2 border-black rounded-md"
          />
        </div>
        <h4 className="text-gray-400 mt-8">
          {" "}
          We respect your privacy and we will never spam you.
        </h4>
      </div>
    </div>
  );
}

export default Curriculum;
