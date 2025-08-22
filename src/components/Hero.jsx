import React from "react";
import { Link } from "react-router";

const Hero = () => {
  return (
    <>
      <div className="hero -mt-18">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="text-5xl font-bold">
              Welcome to{" "}
              <span className="text-5xl bg-300% font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">
                ByteBlaze
              </span>{" "}
            </h1>
            <p className="py-6 px-0">
              ByteBlaze is the bridge between the complex world of technology
              and the curious minds eager to understand it
            </p>
            <div className="flex gap-3 items-center justify-center">
              <Link
                to="/blogs"
                className="relative inline-block px-4 py-2 font-medium group"
              >
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-indigo-700 group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">
                  Read Blogs
                </span>
              </Link>

              <Link
                to="/bookmarks"
                className="relative inline-block px-4 py-2 font-medium group"
              >
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-indigo-700 group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">
                  Bookmarks
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
