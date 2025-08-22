import Author from "../components/Author";
import Content from "../components/Content";
import MainLayout from "../MainLayout/MainLayout";
import Blog from "../pages/Blog";
import Blogs from "../pages/Blogs";
import Bookmarks from "../pages/Bookmarks";
import Home from "../pages/Home";
import { createBrowserRouter } from "react-router";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/blogs",
        element: <Blogs />,
        loader: () => fetch(`https://dev.to/api/articles?per_page=20?@top=7`),
      },
      {
        path: "/blog/:id",
        element: <Blog />,
        loader: ({ params }) =>
          fetch(` https://dev.to/api/articles/${params.id}`),

        children: [
          {
            index: true,
            element: <Content />,
             loader: ({ params }) =>
              fetch(` https://dev.to/api/articles/${params.id}`),
        
          },
          {
            path: "author",
            element: <Author />,
            loader: ({ params }) =>
              fetch(` https://dev.to/api/articles/${params.id}`),
          },
        ],
      },

      {
        path: "/bookmarks",
        element: <Bookmarks />,
      },
    ],
  },
]);
