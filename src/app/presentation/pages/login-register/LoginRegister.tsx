import { Outlet } from 'react-router-dom'

export const LoginRegister = () => {
    return (
        <div className="flex w-full h-screen">
            <div className="px-4  w-full lg:w-1/2">
                <Outlet />
            </div>
            <div className="w-1/2 hidden md:hidden lg:block">
                <img src="/bg.jpg" className="w-1/2 mx-auto fixed" alt="Costa lover Logo" />
            </div>
        </div>
    )
}
