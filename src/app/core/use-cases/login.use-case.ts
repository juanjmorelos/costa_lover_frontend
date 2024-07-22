import { AxiosError } from "axios";
import { HttpAdapter } from "../../config/service/http/http.adapter";
import { loginRegisterResponse } from "../../infrastructure/entities/user.entity";
import { LoginRegisterDBResponse } from "../../infrastructure/interfaces/login.interface";
import { UserMapper } from "../../infrastructure/mappers/UserMapper";

export const loginUserUseCase = async (fetcher: HttpAdapter, username: string, password: string): Promise<loginRegisterResponse> => {
    try {
        const response = await fetcher.post<LoginRegisterDBResponse>("/login", {
            username,
            password
        })
        const userResponse = UserMapper.DBResponseToUserEntity(response);
        return userResponse
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
        throw new Error("Error logueando")
    }
}