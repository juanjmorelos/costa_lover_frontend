import { AvatarDropdown } from './AvatarDropdown'
import { Link } from 'react-router-dom'
import { user } from '../../../infrastructure/entities/user.entity'
import { useLocalStorageStore } from '../../stores/useLocalStorage'

export const Navbar = () => {

    const storedItem  = useLocalStorageStore(state => state.storedItem) 
    const getStore  = useLocalStorageStore(state => state.getStoredValue) 
    getStore("user")
    let user: user | undefined = undefined
    if(storedItem) {
        user = JSON.parse(storedItem ?? '')
    }
    

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow-sm">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="logo.png" className="h-12" alt="Costa lover Logo" />
                </Link>
                <div className="block w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            {
                                user && <AvatarDropdown user={user}/>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

// Explora, crea tus propias recetas y compartelas con el mundo!