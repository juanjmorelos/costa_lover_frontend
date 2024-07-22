import React from 'react'
import { Post } from '../../../../infrastructure/entities/post.entity'
import { user } from '../../../../infrastructure/entities/user.entity'
import { commentStore } from '../../../stores/commentStore'

interface props {
    post: Post
    currentUser: user
}

export const CommentBox = ({post, currentUser}: props) => {
    const setComment = commentStore(state => state.setComment);
    const closeComent = () => {
        setComment(false)
    }
    
    return (
        <div className="flex flex-col ml-4 w-full">
            <span className='text-sm font-semibold'>{currentUser.name} {currentUser.lastName}</span>
            <div className='w-full mt-2'>
                <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                    <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                        <label htmlFor="comment" className="sr-only">Your comment</label>
                        <textarea id="comment" rows={4} className="outline-none w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400 resize-none" placeholder="Tu comentario..." ></textarea>
                    </div>
                    <div className="flex items-center justify-start gap-2 px-3 py-2 border-t dark:border-gray-600">
                        <button  className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-red-600 rounded-lg focus:ring-4 focus:ring-red-200 dark:focus:ring-red-900 hover:bg-red-800">
                            Comentar
                        </button>
                        <button onClick={closeComent} className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-red-400 rounded-lg focus:ring-4 focus:ring-red-50 dark:focus:ring-red-800 hover:bg-red-700">
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
