import { HttpAdapter } from "../../config/service/http/http.adapter";
import { FeedEntity } from "../../infrastructure/entities/post.entity";
import { FeedDBResponse } from "../../infrastructure/interfaces/feed.interface";
import { PostMapper } from "../../infrastructure/mappers/PostMapper";
import { NewFeedEntity } from '../../infrastructure/entities/newFeed.entity';
import { NewFeedDBResponse } from "../../infrastructure/interfaces/newFeed.interface";
import { NewPostMapper } from "../../infrastructure/mappers/NewPostMapper";

export const newPostUseCase = async (
    fetcher: HttpAdapter, 
    user: string, 
    description: string, 
    media: File | null 
): Promise<NewFeedEntity> => {
    try {
        const formData = new FormData()
        formData.append('userOwn', user)
        formData.append('description', description)
        if(media) {
            formData.append('media', media)
        }

        const response = await fetcher.post<NewFeedDBResponse>('/create', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        const feed = NewPostMapper.NewFeedDBResponseToEntity(response)
        return feed
    } catch (error: any) {
        if (error.response) {
            const res = NewPostMapper.NewFeedDBResponseToEntity(error.response.data)
            return res
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log('Error', error.message);
        }
        console.log(error.config);
        throw new Error("Error logueando")
    }
}