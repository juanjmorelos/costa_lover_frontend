import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/home/HomePage";
import { LoginRegister } from "../pages/login-register/LoginRegister";
import { Login } from "../pages/login-register/components/Login";
import { Register } from "../pages/login-register/components/Register";
import { Welcome } from "../pages/home/components/Welcome";
import { Feed } from "../pages/feed/Feed";
import { NewPost } from "../pages/newPost/NewPost";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        children: [
            {
                path: '',
                element: <Welcome/>
            },
            {
                path: 'feed',
                element: <Feed/>
            },
            {
                path: 'newPost',
                element: <NewPost/>
            }
        ]
    },
    {
        path: "/user/*",
        element: <LoginRegister />,
        children: [
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            }
        ]
    }
]);


