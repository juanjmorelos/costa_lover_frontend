export interface FeedEntity {
    success: boolean;
    message: string;
    posts:   Post[];
}

export interface Post {
    id:         string;
    userOwn:     UserOwn;
    description: string;
    media:       string;
    mediaType:   string;
    likes:       number;
    comments:    Comment[];
    createdAt:   string;
}

export interface Comment {
    id:       string;
    post:      string;
    user:      UserOwn;
    text:      string;
    likes:     number;
    replies:   Reply[];
    createdAt: string;
}

export interface Reply {
    id:       string;
    post:      string;
    user:      UserOwn;
    text:      string;
    likes:     number;
    createdAt: string;
}

export interface UserOwn {
    id:          string;
    name:         string;
    profileImage: string;
    lastName:     string;
    username:     string;
}
