import { loginRegisterResponse } from "../entities/user.entity";
import { LoginRegisterDBResponse } from "../interfaces/login.interface";

export class UserMapper {
    static DBResponseToUserEntity(response: LoginRegisterDBResponse): loginRegisterResponse {
        if(response.user) {
            return {
                success: response.success,
                message: response.message,
                user: {
                    id: response.user._id,
                    profileImage: response.user.profileImage,
                    name: response.user.name,
                    lastName: response.user.lastName,
                    username: response.user.username,
                    email: response.user.email
                }
            }
        }
        return {
            success: response.success,
            message: response.message,
        }
    }
}