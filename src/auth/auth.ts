import axios from "axios";

const api = axios.create({
  baseURL: "https://portfolio-backend-production-7fbc.up.railway.app",
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export async function login(email: string, password: string) {
  try {
    const response = await api.post("/auth/login", {
      email,
      password,
    });

    const { token } = response.data;

    localStorage.setItem("token", token);
    
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Status:", error.response?.status);
      console.error("Data:", error.response?.data);
    }
  }
}

export async function getApps() {
  try {
    const response = await api.get("/apps");
    return response.data;
  } catch (error) {
    console.error("Unknown error:", error);
  }
}
