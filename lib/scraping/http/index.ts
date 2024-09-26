import axios, { AxiosInstance } from 'axios';
import { DEFAULT_USERAGENT } from "./constants";

interface HttpClientOptions {
    userAgent?: string
    defaultHeaders?: Record<string, string>
}

export class HttpClient {
    public readonly instance: AxiosInstance

    constructor(
        options?: HttpClientOptions
    ) {
        if (!options) {
            options = {}
        }

        if (!options.userAgent) {
            options.userAgent = DEFAULT_USERAGENT
        }

        this.instance = axios.create({
            withCredentials: true,
            headers: {
                ...options.defaultHeaders
            }
        })
    }
}