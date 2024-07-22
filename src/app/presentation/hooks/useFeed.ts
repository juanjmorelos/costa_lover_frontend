import { useEffect, useState } from "react"
import { Post } from "../../infrastructure/entities/post.entity"
import { getFeedUseCase } from "../../core/use-cases/feed.use-case"
import { serviceFetcher } from "../../config/service/adapter"

export const useFeed = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [success, setIsSuccess] = useState<boolean>(false)
    const [message, setMessage] = useState<string>('')
    const [feed, setFeed] = useState<Post[]>()
    const [userId, setUserId] = useState<string | undefined>()
    const [hasFetched, setHasFetched] = useState<boolean>(false);

    useEffect(() => {
        if (!hasFetched) {
            getFeed();
            setHasFetched(true);
        }
    }, []);

    const getFeed = async () => {
        setIsLoading(true)
        const response = await getFeedUseCase(serviceFetcher, userId)
        setIsSuccess(response.success)
        if(response.success) {
            setFeed(response.posts)
            setIsLoading(false)
            return
        }
        setMessage(response.message)
        setIsLoading(false)
    }

    return {
        isLoading,
        success,
        message,
        feed,
        setUserId
    }
}