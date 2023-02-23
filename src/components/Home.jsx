import React from "react";

const Home = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col">
      <div className="flex flex-col max-w-[35%] mt-[25vh] pl-[5%] relative z-20">
        <h1 className="text-7xl font-bold">
          Bring your code, we'll handle the rest.
        </h1>
        <p className="text-slate-600 text-xl font-medium my-8">
        Made for any language, for projects big and small. Railway is the cloud that takes the complexity out of shipping software.z
        </p>
        <button className="primary-btn w-fit">Start a new Project</button>
      </div>
      <div className="absolute w-[50%] right-0 top-[50%] translate-y-[-50%]">
        <img src="/website-ss.svg" className="w-full" alt="" />
      </div>
      <div className="absolute w-[30%] right-[50%] top-[50%]">
        <img src="/github-ss.svg" className="w-full" alt="" />
      </div>
    </div>
  );
};

export default Home;
