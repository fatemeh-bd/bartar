import axios from 'axios';
import Cookies from 'js-cookie';

export const BASE_URL = 'http://api.mizcode.com';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// بررسی لاگین بودن کاربر
const checkAuth = (): boolean => {
  const accessToken = Cookies.get('accessToken');
  if (!accessToken) {
    window.location.href = '/login';
    return false;
  }
  return true;
};

// درخواست برای دریافت Access Token جدید با استفاده از Refresh Token
// const refreshAccessToken = async () => {
//   try {
//     const refreshToken = Cookies.get('refreshToken');
//     if (!refreshToken) throw new Error('No refresh token found');

//     const response = await axios.post(`${BASE_URL}/auth/refresh-token`, { refreshToken });
//     const { accessToken, refreshToken: newRefreshToken } = response.data;

//     // ذخیره‌ی توکن‌های جدید در کوکی
//     Cookies.set('accessToken', accessToken, { secure: true, sameSite: 'Strict' });
//     Cookies.set('refreshToken', newRefreshToken, { secure: true, sameSite: 'Strict' });

//     return accessToken;
//   } catch (error) {
//     console.error('Failed to refresh token:', error);
//     Cookies.remove('accessToken');
//     Cookies.remove('refreshToken');
//     window.location.href = '/login';
//     throw error;
//   }
// };

// اینترسپتور برای مدیریت درخواست‌ها و رفرش توکن در صورت لزوم
// api.interceptors.response.use(
//   (response) => response,
//   async (error: AxiosError) => {
//     const originalRequest = error.config as any;
//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true; // جلوگیری از درخواست بی‌نهایت
//       const newAccessToken = await refreshAccessToken();
//       originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
//       return api(originalRequest);
//     }
//     return Promise.reject(error);
//   }
// );

export const callApi = async (
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  endpoint: string,
  body?: any,
  customHeaders?: Record<string, string>
) => {
  try {
    const response = await api({
      method,
      url: endpoint,
      data: body || null,
      headers: {
        Authorization: `Bearer ${Cookies.get('accessToken')}`,
        ...customHeaders,
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error in callApi (${method} ${endpoint}):`, error);
    throw error;
  }
};
