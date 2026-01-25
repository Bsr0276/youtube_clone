import axios from "axios";

//kullacağımız api'a göre axios'u özelleştirelim
//api'ın temel adresleri
//api isteklerindede gönderilmesi gereken headerlar

const api = axios.create({
  baseURL: "https://yt-api.p.rapidapi.com",

  headers: {
    "x-rapidapi-key": import.meta.env.VITE_API_KEY,
    "x-rapidapi-host": "yt-api.p.rapidapi.com",
  },
});

export default api;
