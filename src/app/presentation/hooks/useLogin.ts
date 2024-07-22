import { useState } from "react"
import { loginUserUseCase } from "../../core/use-cases/login.use-case";
import { serviceFetcher } from "../../config/service/adapter";
import { user } from "../../infrastructure/entities/user.entity";

export const useLogin = () => {
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [success, setIsSuccess] = useState<boolean>(false)
    const [message, setMessage] = useState<string>('')
    const [user, setUser] = useState<user>()

    const login = async (): Promise<void> => {
        setIsLoading(true)
        const request = await loginUserUseCase(serviceFetcher, username!, password!)
        setIsSuccess(request.success)
        if(request.success) {
            setUser(request.user!)
            setIsLoading(false)
            return
        }
        setMessage(request.message)
        setIsLoading(false)
    }

    return {
        isLoading,
        message,
        user,
        success,
        username,
        password,
        setUsername,
        setPassword,
        login
    }
}