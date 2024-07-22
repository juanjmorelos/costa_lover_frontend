import { NewFeedDBResponse } from '../interfaces/newFeed.interface';
import { NewFeedEntity } from '../entities/newFeed.entity';
export class NewPostMapper {
    static NewFeedDBResponseToEntity(response: NewFeedDBResponse): NewFeedEntity {
        if(response.post) {
            return {
                message: response.message,
                success: response.success,
                post: {
                    id: response.post._id,
                    userOwn: response.post.userOwn,
                    description: response.post.description,
                    media: response.post.media,
                    mediaType: response.post.mediaType,
                    createdAt: response.post.createdAt
                }
            }
        }
        return {
            message: response.message,
            success: response.success,
        }
    }
}