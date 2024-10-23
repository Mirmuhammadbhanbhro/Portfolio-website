import React from 'react';
import Link from 'next/link';
const Project = () => {
  return (
    <div id='project'>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        MY Projects
      </h1>
      
    </div>
    <div className="flex flex-wrap -m-5 -mt-[5rem ]">
        {/* projects */}
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="https://dummyimage.com/600x360"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                Catering projects
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              
            </h1>
            <p className="leading-relaxed">
               This is the project which I,ve created 
               My Resume project.
            </p>
            <Link target="_blank" href={"https://hackathon-oags8hnjj-mir-muhammads-projects.vercel.app"}>
            <p className="leading-relaxed text-blue-500 hover:underline">
               View Project
            </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="https://dummyimage.com/600x360"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                Typescript projects
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              
            </h1>
            <p className="leading-relaxed">
            This is the project which I,ve created 
            My Resume project.Cli Calculator Projects
            </p>
            <Link target="_blank" href={"https://hackathon-oags8hnjj-mir-muhammads-projects.vercel.app"}>
            <p className="leading-relaxed text-blue-500 hover:underline">
               View Project
            </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="https://dummyimage.com/600x360"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                Typescript projects
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              
            </h1>
            <p className="leading-relaxed">
            This is the project which I,ve created 
            My Resume project.Cli number-gessing game Projects
            </p>
            <Link target="_blank" href={"https://github.com/Mirmuhammadbhanbhro/cli-number-gessing.git"}>
            <p className="leading-relaxed text-blue-500 hover:underline">
               View Project
            </p>
            </Link>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</section>

    </div>
  );
}

export default Project;

