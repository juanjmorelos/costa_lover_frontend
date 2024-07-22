import { HttpAdapter } from "../../config/service/http/http.adapter";
import { loginRegisterResponse } from "../../infrastructure/entities/user.entity";
import { LoginRegisterDBResponse } from "../../infrastructure/interfaces/login.interface";
import { UserMapper } from "../../infrastructure/mappers/UserMapper";

export const registerUserUseCase = async (fetcher: HttpAdapter,
    name: string,
    lastName: string,
    email: string,
    username: string,
    password: string,
    profileImage: File | null): Promise<loginRegisterResponse> => {
    try {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("lastName", lastName);
        formData.append("email", email);
        formData.append("username", username);
        formData.append("password", password);

        if (profileImage) {
            formData.append("profileImage", profileImage);
        }

        const response = await fetcher.post<LoginRegisterDBResponse>('/register', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        const userResponse = UserMapper.DBResponseToUserEntity(response);
        return userResponse;

    } catch (error: any) {
        if (error.response) {
            const res = UserMapper.DBResponseToUserEntity(error.response.data)
            return res
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log('Error', error.message);
        }
        console.log(error.config);
        throw new Error("Error registrando")
    }
}