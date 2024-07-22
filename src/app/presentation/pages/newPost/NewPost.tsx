import React, { ChangeEvent, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useNewPost } from '../../hooks/useNewPost'
import toast, { Toaster } from 'react-hot-toast'
import { user } from '../../../infrastructure/entities/user.entity'
import { useLocalStorageStore } from '../../stores/useLocalStorage'

export const NewPost = () => {
    const {
        description, 
        media, 
        isLoading, 
        success, 
        message, 
        setDescription, 
        setMedia, 
        setUser,
        createPost
    } = useNewPost()

    const storedItem  = useLocalStorageStore(state => state.storedItem) 
    const getStore  = useLocalStorageStore(state => state.getStoredValue) 
    getStore("user")
    let currentUser: user | undefined = undefined
    if(storedItem) {
        currentUser = JSON.parse(storedItem ?? '')
    }

    useEffect(() => {
        if (currentUser?.id) {
            setUser(currentUser.id);
        }
    }, [currentUser, setUser]);
    const navigate = useNavigate()

    useEffect(() => {
        if(!isLoading) {
            if (success) {
                toast.success("Tu receta ha sido publicada!", {
                    duration: 2000,
                    position: 'bottom-right'
                })
                setTimeout(() => {
                    toast.success("Redirigiendo al feed!", {
                        duration: 2000,
                        position: 'bottom-right'
                    })
                }, 2001)
                setTimeout(() => {
                    navigate('/feed')
                }, 4001)
            } else if (message) {
                toast.error(message, {
                    duration: 2000,
                    position: 'bottom-right'
                });
            }
        }
    }, [success, message, isLoading]);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setMedia(event.target.files[0]);
        }
    };

    const onClick = async () => {
        if(!description || !media) {
            toast.error("Selecciona un archivo y escribe tu receta!", {
                duration: 2000,
                position: 'bottom-right'
            })
            return
        }
        await createPost()
    }

    return (
        <div className='bg-gray-100 w-full h-dvh py-4'>
            <div className='w-3/4 shadow-md bg-white my-4 mx-auto pt-4 pr-3 pl-3 pb-4 rounded-lg'>
                <span className="text-lg font-semibold">Nueva receta</span>
                <div className="flex h-100 gap-4 items-center justify-center mt-3">
                    <div className="w-1/2 h-full">
                        <input type="file" id="select" className='hidden' onChange={handleFileChange} accept="image/png, image/jpeg"/>
                        <label htmlFor="select">
                            <div className="border-4 border-dashed h-full rounded-lg flex items-center justify-center p-2">
                                {
                                    !media && <span className='underline cursor-pointer text-red-600'>Sube una imagen</span>
                                }
                                {
                                    media && <img src={URL.createObjectURL(media)} className='w-full h-full object-cover cursor-pointer' alt="" />
                                }
                            </div>
                        </label>
                    </div>
                    <div className="w-1/2">
                        <div className="flex flex-col w-full">
                            <div className='w-full mt-2'>
                                <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                                    <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                                        <textarea onChange={(e) => setDescription(e.target.value)} id="comment" rows={18} className="outline-none w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400 resize-none" placeholder="Escribe tu receta..."></textarea>
                                    </div>
                                    <div className="flex items-center justify-start gap-2 px-3 py-2 border-t dark:border-gray-600">
                                        <button onClick={onClick} className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-red-600 rounded-lg focus:ring-4 focus:ring-red-200 dark:focus:ring-red-900 hover:bg-red-800">
                                            Publicar
                                        </button>
                                        <Link to="/feed" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-red-400 rounded-lg focus:ring-4 focus:ring-red-50 dark:focus:ring-red-800 hover:bg-red-700">
                                            Cancelar
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster/>
        </div>
    )
}
