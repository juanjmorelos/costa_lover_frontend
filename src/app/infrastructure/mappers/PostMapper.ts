import { FeedDBResponse } from '../interfaces/feed.interface';
import { FeedEntity } from '../entities/post.entity';

export class PostMapper {
        static PostDBResponseToEntity(response: FeedDBResponse): FeedEntity {
            return {
                success: response.success,
                message: response.message,
                posts: response.posts.map(post => ({
                    id: post._id,
                    userOwn: {
                        id: post.userOwn._id,
                        name: post.userOwn.name,
                        profileImage: post.userOwn.profileImage,
                        lastName: post.userOwn.lastName,
                        username: post.userOwn.username,
                    },
                    description: post.description,
                    media: post.media,
                    mediaType: post.mediaType,
                    likes: post.likes,
                    comments: post.comments.map(comment => ({
                        id: comment._id,
                        post: comment.post,
                        user: {
                            id: comment.user._id,
                            name: comment.user.name,
                            profileImage: comment.user.profileImage,
                            lastName: comment.user.lastName,
                            username: comment.user.username,
                        },
                        text: comment.text,
                        likes: comment.likes,
                        replies: comment.replies.map(reply => ({
                            id: reply._id,
                            post: reply.post,
                            user: {
                                id: reply.user._id,
                                name: reply.user.name,
                                profileImage: reply.user.profileImage,
                                lastName: reply.user.lastName,
                                username: reply.user.username,
                            },
                            text: reply.text,
                            likes: reply.likes,
                            createdAt: reply.createdAt
                        })),
                        createdAt: comment.createdAt
                    })),
                    createdAt: post.createdAt
                }))
            };
        }
    
}