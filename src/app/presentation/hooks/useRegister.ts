import { useState } from "react";
import { serviceFetcher } from "../../config/service/adapter";
import { LoginRegisterDBResponse } from "../../infrastructure/interfaces/login.interface"; // Ajusta según tu interfaz
import { AxiosAdapter } from "../../config/service/http/axios.adapter";
import { registerUserUseCase } from "../../core/use-cases/register.use.case";
import { user } from "../../infrastructure/entities/user.entity";

export const useRegister = () => {
    const [name, setName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [profileImage, setProfileImage] = useState<File | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [success, setIsSuccess] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('');
    const [user, setUser] = useState<user>();
    
    const register = async (): Promise<void> => {
        setIsLoading(true);
        const request = await registerUserUseCase(serviceFetcher, name, lastName, email, username, password, profileImage);
        setIsSuccess(request.success);
        if (request.success) {
            setUser(request.user)
            setIsLoading(false);
            return;
        }
        setMessage(request.message);
        setIsLoading(false);
    };

    return {
        isLoading,
        message,
        success,
        name,
        lastName,
        username,
        email,
        password,
        profileImage,
        user,
        setName,
        setLastName,
        setUsername,
        setEmail,
        setPassword,
        setProfileImage,
        register
    };
};

