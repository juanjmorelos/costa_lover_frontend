import React, { ChangeEvent, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useRegister } from '../../../hooks/useRegister';
import toast, { Toaster } from 'react-hot-toast';
import { useLocalStorageStore } from '../../../stores/useLocalStorage';

export const Register = () => {
    const {
        name,
        lastName,
        username,
        email,
        password,
        profileImage,
        setName,
        setLastName,
        setUsername,
        setEmail,
        setPassword,
        setProfileImage,
        register,
        isLoading,
        message,
        user,
        success
    } = useRegister();

    const setValue  = useLocalStorageStore(state => state.setValue) 

    const navigate = useNavigate();

    useEffect(() => {
        if(!isLoading) {
            if (success) {
                setValue("user", JSON.stringify(user))
                navigate("/feed")
            } else if (message) {
                toast.error(message, {
                    duration: 2000,
                    position: 'bottom-left'
                });
            }
        }
    }, [success, message, isLoading, user]);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setProfileImage(event.target.files[0]);
        }
    };

    const handleRegister = async () => {
        if (!name || !lastName || !email || !username || !password || !profileImage) {
            toast.error("Por favor, seleccione una foto de perfil y diligencie todos los campos", {
                duration: 2000,
                position: 'bottom-left'
            });
            return;
        }

        await register();

        if (success) {
            navigate('/feed');
        } else {
            console.error(message);
        }
    };

    return (
        <div className="px-32 w-full overflow-y-scroll my-4">
            <div className="h-full w-full">
                <Link to="/">
                    <img src="/logo.png" className="w-52 mx-auto" alt="Costa lover Logo" />
                </Link>
                <span className='text-xl font-semibold text-center my-8 block'>Nos agrada que te nos unas!</span>
                <div className="mb-5 flex flex-col items-center justify-center">
                    <label className="self-start block mb-2 text-sm font-medium text-gray-900 dark:text-white">Escoje tu foto de perfil</label>
                    <input type="file" id="select" accept="image/png, image/jpeg" className='hidden' onChange={handleFileChange} />
                    <label htmlFor='select' className='mx-auto'>
                        <div className="rounded-full overflow-hidden w-48 h-48 cursor-pointer">
                            <img src={profileImage ? URL.createObjectURL(profileImage) : "https://cdn-icons-png.flaticon.com/512/3177/3177440.png"} alt="" className='object-cover w-full h-full aspect-w-1 aspect-h-1' />
                        </div>
                    </label>
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" required />
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Apellido</label>
                    <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" required />
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo electrónico</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" required />
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Usuario</label>
                    <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" required />
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" required />
                </div>
                <button onClick={handleRegister} className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" disabled={isLoading}>
                    {isLoading ? 'Registrando...' : 'Registrarme'}
                </button>
                <div className="mt-4 mb-8">
                    <span>Ya tienes una cuenta?</span> <Link to="/user/login" className='text-red-600 underline'>Iniciar sesión</Link>
                </div>
            </div>
            <Toaster/>
        </div>
    )
}
