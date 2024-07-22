import axios, { AxiosInstance } from 'axios';
import { HttpAdapter } from './http.adapter';

interface Options {
    baseUrl: string;
    timeout: number
}

export class AxiosAdapter implements HttpAdapter {
    private axiosInstance: AxiosInstance;

    constructor(options: Options) {
        this.axiosInstance = axios.create({
            baseURL: options.baseUrl,
            timeout: options.timeout
        })
    }
    async get<T>(url: string, options?: Record<string, unknown>): Promise<T> {
        const { data } = await this.axiosInstance.get(url, options)
        return data;
    }
    async post<T>(url: string, json: any, options?: Record<string, unknown>): Promise<T> {
            const { data } = await this.axiosInstance.post(url, json, options);
            return data;
    }
    async put<T>(url: string, json: any, options?: Record<string, unknown>): Promise<T> {
        const { data } = await this.axiosInstance.put(url, json);
        return data;
    }

}