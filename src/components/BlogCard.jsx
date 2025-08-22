import { Link } from "react-router";
import { MdDeleteForever } from "react-icons/md";

const BlogCard = ({ blog, deleteable, handleDelete }) => {
  const { title, social_image, cover_image, id } = blog;

  return (
    <>
      <div className="flex relative">
        <Link
          to={`/blog/${blog.id}`}
          className="max-w-sm mx-auto hover:scale-105 
        group transition border-2 hover:no-underline 
        focus:no-underline  dark:bg-gray-900 border-primary border-opacity-30 hover:border-secondary"
        >
          <img
            role="presentation"
            className="object-cover w-full rounded h-44 bg-gray-500"
            src={cover_image || social_image}
          />
          <div className="p-6 space-y-2">
            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline"></h3>
            <span className="text-xs text-gray-400">January 21, 2021</span>
            <p>{title}</p>
          </div>
        </Link>
        {deleteable && (
          <div
            onClick={() => handleDelete(blog.id)}
            className="bg-primary p-3 ml-5 rounded-full hover:bg-secondary group  cursor-pointer hover:scale-105 absolute -top-5 -right-5"
          >
            <MdDeleteForever
              size={20}
              className="text-secondary group-hover:text-primary"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default BlogCard;
