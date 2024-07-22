export interface loginRegisterResponse {
    success: boolean;
    message: string;
    user?: user;
} 

export interface user {
    id: string;
    profileImage: string;
    name: string;
    lastName: string;
    username: string;
    email: string;
}

