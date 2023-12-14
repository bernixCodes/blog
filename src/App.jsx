import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/main/mainLayout";
import Blog from "./pages/blog/index";
import BlogDetail from "./pages/blogDetail/index";
import User from "./pages/user/index";
import "./App.css";
import AddModal, { addPostAction } from "./components/blogs/AddModal/index";
import EditModal, { editPost } from "./components/blogs/EditModal/index";
import DeleteModal from "./components/blogs/DeleteModal/index";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "blog",
        element: <Blog />,
        loader: async () => {
          const url = "http://localhost:3000/posts";
          const response = await fetch(url);
          const data = await response.json();
          return data;
        },
        children: [
          {
            path: "create-post",
            element: <AddModal />,
            action: addPostAction,
          },
        ],
      },
      {
        path: "blog/:blogId",
        element: <BlogDetail />,
        children: [
          {
            path: "edit",
            element: <EditModal />,
            action: editPost,
          },
          {
            path: "delete",
            element: <DeleteModal />,
          },
        ],
      },
      {
        path: "users",
        element: <User />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;


// run server with this code
// json-server --watch data/posts.json