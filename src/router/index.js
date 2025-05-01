import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostIdPage from '../pages/PostIdPage';
import Login from "../pages/Login";

export const privateRoutes = [
    {path: '/about', element: <About/>},
    {path: '/posts', element: <Posts />},
    {path: '/posts/:id', element: <PostIdPage />},
    {path: '', element: <Posts />},
    {path: '/login', element: <Posts />}
    // {path: '*', element: <Error />}
]


export const publicRoutes = [
    {path: '/login', element: <Login/>},
    // {path: '*', element: <Login/>}
]