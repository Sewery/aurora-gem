import axios, { AxiosRequestConfig, AxiosError,InternalAxiosRequestConfig } from 'axios';


interface RefreshTokenResponse {
  accessToken: string;
 
}


interface CustomAxiosRequestConfig extends AxiosRequestConfig {
    _retry?: boolean;
  }

const authAPI = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json',
  },
});

let refreshTokenRequest: Promise<RefreshTokenResponse> | null = null;

const handleUnauthenticated = () => {

  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
  
  window.location.replace('/login');
};





authAPI.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers.set('Authorization', `Bearer ${accessToken}`);
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);


authAPI.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as CustomAxiosRequestConfig;

    if (
      error.response?.status === 401 &&
      originalRequest &&
      !originalRequest._retry
    ) 
    {
     
      originalRequest._retry = true; 

      if (!refreshTokenRequest) {
        const refreshToken = localStorage.getItem('refreshToken');
        if(!refreshToken){
          handleUnauthenticated();
          return Promise.reject(error);
        }
        refreshTokenRequest = axios.post<RefreshTokenResponse>(
          'http://localhost:3030/api/refresh',
          { refreshToken: refreshToken }
        ).then((response) => response.data);
      }

      try {
        const data = await refreshTokenRequest;
        refreshTokenRequest = null;

       
        localStorage.setItem('accessToken', data.accessToken);
    

      
        originalRequest.headers!.Authorization = `Bearer ${data.accessToken}`;

      
        return authAPI(originalRequest);
      } catch (refreshError:any) {
        refreshTokenRequest = null; 
        if(refreshError.response?.status === 401){
          handleUnauthenticated();
        }
        console.error('Error refreshing token');
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);



export default authAPI;