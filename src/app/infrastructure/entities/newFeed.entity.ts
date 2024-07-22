export interface NewFeedEntity {
    success: boolean;
    message: string;
    post?:    NewPostEntity;
}

export interface NewPostEntity {
    userOwn:     string;
    description: string;
    media:       string;
    mediaType:   string;
    createdAt:   Date;
    id:         string;
}
