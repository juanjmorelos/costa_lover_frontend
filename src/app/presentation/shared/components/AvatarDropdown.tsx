import React, { useState } from 'react'
import { user } from '../../../infrastructure/entities/user.entity';
import { baseUrl } from '../../../config/service/adapter';
import { Link, useNavigate } from 'react-router-dom';
import { useLocalStorageStore } from '../../stores/useLocalStorage';

interface props {
    user: user
}

export const AvatarDropdown = ({user}: props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);

    const image = `${baseUrl}/uploads/${user.profileImage}`;
    const name = `${user.name.split(" ")[0]} ${user.lastName.split(" ")[0]}`
    
    const storedItem  = useLocalStorageStore(state => state.storedItem) 
    const getStore  = useLocalStorageStore(state => state.getStoredValue) 
    const removeItem  = useLocalStorageStore(state => state.removeItem) 
    getStore("user")
    let currentUser: user | undefined = undefined
    if(storedItem) {
        currentUser = JSON.parse(storedItem ?? '')
    }

    
    const navigate = useNavigate()

    if(storedItem) {
        currentUser = JSON.parse(storedItem ?? '');
    }

    const logout = () => {
        toggleDropdown()
        removeItem("user")
        navigate('/')
    }

    return (
        <div className="relative inline-block text-left">
            {/* Avatar */}
            <div className="flex items-center">
                <button
                    onClick={toggleDropdown}
                    className="flex items-center space-x-2 focus:outline-none"
                >
                    <img
                        src={image}
                        alt="Avatar"
                        className="w-10 h-10 rounded-full border border-gray-300 object-cover aspect-w-1 aspect-h-1"
                    />
                    <div className="font-medium dark:text-white ml-2">
                        <div>{user.username}</div>
                    </div>
                    <svg
                        className="w-4 h-4 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>
                
            </div>

            {/* Dropdown Menu */}
            {isOpen && (
                <div id="userDropdown" className="z-10 bg-slate-50 divide-y mt-1 divide-gray-200 rounded-lg shadow-xl w-48 dark:bg-gray-700 dark:divide-gray-600 absolute right-0">
                    <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                        <div>{name}</div>
                        <div className="font-medium truncate">{user.email}</div>
                    </div>
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
                        <li>
                            <Link to="/feed" onClick={toggleDropdown} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Feed</Link>
                        </li>
                        <li>
                            <Link to="/newPost" onClick={toggleDropdown} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Nueva publicación</Link>
                        </li>
                    </ul>
                    <div className="py-1">
                        <button onClick={logout} className="block px-4 w-full py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Cerrar sesión</button>
                    </div>
                </div>
            )}
        </div>
    )
}
