import axios from "axios";

export const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_GITHUB_API_URL,
});
