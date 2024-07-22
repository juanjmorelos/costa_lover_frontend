import { useState } from 'react';
import { baseUrl } from '../../../../config/service/adapter';
import { Post } from '../../../../infrastructure/entities/post.entity'
import { user } from '../../../../infrastructure/entities/user.entity';
import { Comments } from './Comments';
import { UserNavbar } from './UserNavbar';
import { FiMessageCircle } from "react-icons/fi";
import { commentStore } from '../../../stores/commentStore';
import { CommentBox } from './CommentBox';
import toast, { Toaster } from 'react-hot-toast';

interface props {
    post: Post
    currentUser: user
}

export const Poster = ({ post, currentUser }: props) => {
    const image = `${baseUrl}/uploads/${post.media}`;
    const comment = commentStore(state => state.comment);
    const setComment = commentStore(state => state.setComment);

    const openComment = () => {
        //setComment(true)
        toast.error("Esta funcionalidad aun esta en construcción", {
            duration: 3000,
            icon: '😔'
        })
    }

    return (
        <div className='w-3/4 shadow-md bg-white my-4 mx-auto pt-4 pr-3 pl-3 pb-4 rounded-lg'>
            <div className="flex h-100">
                <div className='w-3/5'>
                    {post.mediaType === 'image' ? (
                        <img src={image} alt="" className='w-full h-full object-cover' />
                    ) : (
                        "Es un video ahora miramos"
                    )}
                </div>
                <div className='w-2/5 flex flex-col ml-1'>
                    <UserNavbar user={post.userOwn} />
                    <div className="p-3 flex-1 overflow-y-auto max-h-100">
                        <div className='font-sans text-md whitespace-pre-wrap'>{post.description}</div>
                    </div>
                </div>
            </div>
            <div className="p-4 bg-slate-50 rounded-b-lg mt-4">
                <div className="flex gap-2 items-center justify-start mb-4">
                    <p className='font-semibold text-lg'>Comentarios</p>
                    <button onClick={openComment} className='inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-black rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:ring-red-200'>
                        <FiMessageCircle />
                    </button>
                </div>
                {
                    post.comments.map((comment) => {
                        return (
                            <Comments comment={comment} />
                        )
                    })
                }
                {

                    comment &&       
                    <div className="flex ml-2 mt-4 items-start justify-start pb-3">
                        <img
                            src={image}  // Ruta de la imagen del avatar
                            alt="Avatar"
                            className="w-9 h-9 rounded-full border border-gray-200 object-cover aspect-w-1 aspect-h-1"
                        />
                        <CommentBox post={post} currentUser={currentUser}/>
                    </div>
                }
            </div>
            <Toaster/>
        </div>
    );
}
