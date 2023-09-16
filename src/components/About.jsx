import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Hello, I'm Gautam, a CSE student with a passion for how computers work, how these applications are designed and what can be the newer ways to explore the world of computers to make our world better. Throughout my academic journey, I've been driven by a thirst for knowledge and a desire to make a positive impact.
        <br /><br />
        Currently pursuing my B.E CSE at Chitkara University, I've been fortunate to explore various facets of CSE and develop a solid foundation in Problem solving and Web development. My curiosity has led me to actively participate in various coding competiton and fun activites.
        <br /><br />
        As a student, I am committed to continuous growth and self-improvement. I'm always seeking ways to expand my knowledge and explore emerging trends in AI. Moreover, I find joy in collaborating with peers and learning from their diverse perspectives.
        </p>
        <br />
      </div>
    </div>
  );
};

export default About;
