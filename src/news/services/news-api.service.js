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


// apiKey ->    UVSe7kzPdAzbHaAtaAcKAgrl

// un solo atributo     https://api.bestbuy.com/v1/stores(region=ut)?format=json&show=storeId,city,region&apiKey=YourAPIKey
// cualquier atributo   https://api.bestbuy.com/v1/products(wifiReady=true|wifiBuiltIn=true)?format=json&show=sku,name,salePrice&apiKey=YourAPIKey
// multiples atributos  https://api.bestbuy.com/v1/products(categoryPath.id=abcat0901005&color%20in(white,bisque,stainless-steel))?format=json&show=sku,name,salePrice&apiKey=YourAPIKey
// valor presente       https://api.bestbuy.com/v1/products(categoryPath.id=abcat0502000&driveCapacityGb=*)?format=json&show=sku,name,salePrice&apiKey=YourAPIKey
// palabra clave        https://api.bestbuy.com/v1/products(search=oven&search=stainless&search=steel)?format=json&show=sku,name,salePrice&apiKey=YourAPIKey


