import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLocalStorageStore } from '../../../stores/useLocalStorage'
import { user } from '../../../../infrastructure/entities/user.entity'


export const Welcome = () => {
    const navigate = useNavigate();
    const storedItem  = useLocalStorageStore(state => state.storedItem) 
    const getStore  = useLocalStorageStore(state => state.getStoredValue) 
    getStore("user")
    let user: user | undefined = undefined
    if(storedItem) {
        user = JSON.parse(storedItem ?? '')
    }

    useEffect(() => {
        if (user) {
            navigate('/feed');
        }
    }, [user, navigate]);
    

    return (
        <section className="bg-center bg-no-repeat bg-[url('https://img.freepik.com/foto-gratis/ingredientes-pasta_23-2147771976.jpg?t=st=1721534181~exp=1721537781~hmac=619101ba2f6c811a311c35bb187ef5507ea3c4dfcdfd2624bcbc03677f28c356&w=1480')] bg-gray-700 bg-blend-multiply">
            <div className="px-4 mx-auto max-w-screen-xl text-center py-28 lg:py-48 h-screen lg:h-auto">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Bienvenido a Costa Love</h1>
                <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">La red social para cocineros expertos e inexpertos. Explora, crea tus propias recetas y compartelas con el mundo!</p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                    <Link to={`/user/login`} className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900">
                        Iniciar sesión
                        <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </Link>
                    <Link to="/user/register" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                        Regístrate
                    </Link>  
                </div>
            </div>
        </section>
    )
}
