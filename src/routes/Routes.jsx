import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Banner from "../components/Banner/Banner";
import Blog from "../components/Blog/Blog";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Banner></Banner>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
])

export default router;