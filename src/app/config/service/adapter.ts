import { AxiosAdapter } from "./http/axios.adapter";

export const baseUrl = 'https://costa-lover-backend.onrender.com'
export const serviceFetcher = new AxiosAdapter({
    baseUrl: baseUrl,
    timeout: 10000
})