import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Blog from "../components/Blog/Blog";
import Home from "../components/Home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
])

export default router;