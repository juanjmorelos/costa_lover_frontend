import React from 'react'
import { Comment } from '../../../../infrastructure/entities/post.entity';
import { baseUrl } from '../../../../config/service/adapter';

interface props {
    comment: Comment
}

export const Comments = ({comment}: props) => {
    const user = comment.user
    const image = `${baseUrl}/uploads/${user.profileImage}`;
    return (
       <div className='border-b'>
            <div className="flex ml-2 mt-2 items-start justify-start pb-3">
                <img
                    src={image}  // Ruta de la imagen del avatar
                    alt="Avatar"
                    className="w-9 h-9 rounded-full border border-gray-200 object-cover aspect-w-1 aspect-h-1"
                />
                <div className="flex flex-col ml-4">
                    <span className='text-sm font-semibold'>{user.name} {user.lastName}</span>
                    <span>{comment.text}</span>
                </div>
            </div>
       </div>
    )
}
