import { useState } from "react"
import { newPostUseCase } from "../../core/use-cases/new-post.use-case"
import { serviceFetcher } from "../../config/service/adapter"
import { NewPostEntity } from "../../infrastructure/entities/newFeed.entity"

export const useNewPost = () => {
    const [user, setUser] = useState<string>()
    const [description, setDescription] = useState<string>()
    const [media, setMedia] = useState<File | null>(null);
    const [feed, setFeed] = useState<NewPostEntity>()

    const [isLoading, setIsLoading] = useState(false)
    const [message, setMessage] = useState<string>()
    const [success, setIsSuccess] = useState<boolean>(false)

    const createPost = async () => {
        setIsLoading(true)
        const response = await newPostUseCase(serviceFetcher, user!, description!, media)
        setIsSuccess(response.success)
        if(response.success) {
            setFeed(response.post)
            setIsLoading(false)
            return
        }
        setMessage(response.message)
        setIsLoading(false)
    }

    return {
        user,
        description,
        media,
        feed,
        isLoading,
        message,
        success,
        setUser,
        setDescription,
        setMedia,
        createPost
    }
}