import axios from "axios";
import { LogoApiService } from "@/core/services/logo-api.service";

const http = axios.create({
    baseURL: 'https://newsapi.org/v2/'
});

export class NewsApiService {
    apiKey = '0bb517e90fa94e05b81a63c5fd9180a2';
    logoApi = new LogoApiService();
    getSources() {
        return http.get(`top-headlines/sources?apiKey=${this.apiKey}`);
    }
    getArticlesForSource(sourceId) {
        return http.get(`top-headlines?sources=${sourceId}&apiKey=${this.apiKey}`);
    }
    getUrlToLogo(source) {
        return this.logoApi.getUrlToLogo(source);
    }
}

// SOURCES  ->    https://newsapi.org/v2/top-headlines/sources?apiKey=API_KEY
// ARTICLES ->    https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=API_KEY


