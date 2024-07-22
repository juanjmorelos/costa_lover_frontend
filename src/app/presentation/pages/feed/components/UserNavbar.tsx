import React from 'react'
import { UserOwn } from '../../../../infrastructure/entities/post.entity'
import { baseUrl } from '../../../../config/service/adapter';
interface props {
    user: UserOwn
}
export const UserNavbar = ({user}: props) => {
    const image = `${baseUrl}/uploads/${user.profileImage}`;

    return (
        <div className="flex ml-2 mt-2 items-center justify-start border-b pb-3">
            <img
                src={image}  // Ruta de la imagen del avatar
                alt="Avatar"
                className="w-12 h-12 rounded-full border border-gray-200 object-cover aspect-w-1 aspect-h-1"
            />
            <div className="flex flex-col ml-4">
                <span className='font-semibold'>{user.username}</span>
                <span className='text-sm'>{user.name} {user.lastName}</span>
            </div>
        </div>
    )
}
