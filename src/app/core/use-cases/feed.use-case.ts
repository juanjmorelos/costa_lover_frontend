import { HttpAdapter } from "../../config/service/http/http.adapter";
import { FeedEntity } from "../../infrastructure/entities/post.entity";
import { FeedDBResponse } from "../../infrastructure/interfaces/feed.interface";
import { PostMapper } from "../../infrastructure/mappers/PostMapper";

export const getFeedUseCase = async (fetcher: HttpAdapter, userId?: string): Promise<FeedEntity> => {
    try {
        const url = userId ? `/post/byUser/${userId}` : '/post/all'
        const response = await fetcher.get<FeedDBResponse>(url)
        const feed = PostMapper.PostDBResponseToEntity(response)
        return feed
    } catch (error: any) {
        if (error.response) {
            const res = PostMapper.PostDBResponseToEntity(error.response.data)
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