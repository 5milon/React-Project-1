import React from "react";
import { Link } from "react-router";

const EmptyState = () => {
  return (
    <>
      <div className="flex flex-col min-h-[calc(100vh-116px)] items-center justify-center">
        <h1 className="font-bold py-6">No Bookmark</h1>
        <Link
          to="/blogs"
          className="relative inline-block px-4 py-2 font-medium group"
        >
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full bg-white border-2 border-indigo-700 group-hover:bg-black"></span>
          <span className="relative text-black group-hover:text-white">
            Go to Blogs
          </span>
        </Link>
      </div>
    </>
  );
};

export default EmptyState;
