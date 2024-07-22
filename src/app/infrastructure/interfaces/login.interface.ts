export interface LoginRegisterDBResponse {
    success: boolean;
    message: string;
    user?:    User;
}

export interface User {
    _id:          string;
    name:         string;
    profileImage: string;
    lastName:     string;
    email:        string;
    username:     string;
    password?:    string;
    __v:          number;
}
