export interface NewFeedDBResponse {
    success: boolean;
    message: string;
    post?:    NewPostResponse;
}

export interface NewPostResponse {
    userOwn:     string;
    description: string;
    media:       string;
    mediaType:   string;
    likes:       number;
    comments:    any[];
    createdAt:   Date;
    _id:         string;
    __v:         number;
}
