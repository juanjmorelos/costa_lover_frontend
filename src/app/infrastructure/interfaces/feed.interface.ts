export interface FeedDBResponse {
    success: boolean;
    message: string;
    posts:   PostResponse[];
}

export interface PostResponse {
    _id:         string;
    userOwn:     UserResponse;
    description: string;
    media:       string;
    mediaType:   string;
    likes:       number;
    comments:    CommentReponse[];
    createdAt:   string;
    __v:         number;
}

export interface CommentReponse {
    _id:       string;
    post:      string;
    user:      UserResponse;
    text:      string;
    likes:     number;
    replies:   ReplyResponse[];
    createdAt: string;
    __v:       number;
}

export interface ReplyResponse {
    _id:       string;
    post:      string;
    user:      UserResponse;
    text:      string;
    likes:     number;
    replies:   ReplyResponse[];
    createdAt: string;
    __v:       number;
}

export interface UserResponse {
    _id:          string;
    name:         string;
    profileImage: string;
    lastName:     string;
    username:     string;
}

