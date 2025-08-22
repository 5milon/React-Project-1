import React from "react";
import { useLoaderData } from "react-router";
import Markdown from "react-markdown";
import rehypeRaw from 'rehype-raw'
const Content = () => {
  const blog = useLoaderData();
  const { title, description, social_image, cover_image, body_html } = blog;
  return (
    <>
      <div
        to={`/blog/${blog.id}`}
        className="mx-auto  border-2 hover:no-underline 
              focus:no-underline  text-black border-primary border-opacity-30"
      >
        <img
          role="presentation"
          className=" w-full h-full content-fit rounded"
          src={social_image}
        />
        <div className="space-y-2 overflow-auto p-4">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline"></h3>
          <span className="text-xs text-gray-400">January 21, 2021</span>
          <p>{description}</p>
          <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
        </div>
      </div>
    </>
  );
};

export default Content;
