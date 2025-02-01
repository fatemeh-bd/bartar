import axios from 'axios';
import Cookies from 'js-cookie';
import { BASE_URL } from './apiManager';
export const checkAuth = () => {
  const accessToken = Cookies.get('accessToken');
  if (!accessToken) {
    window.location.href = '/login';
    return false;
  }
  return true;
};

export const postMethod = async (
  endpoint: string,
  body: any,
  customHeaders?: Record<string, string>
) => {
  if (!checkAuth()) {
    return;
  }

  try {
    const response = await axios.post(`${BASE_URL}${endpoint}`, body, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('accessToken')}`,
        ...customHeaders,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error in postMethod:', error);
    throw error;
  }
};

export const getMethod = async (
  endpoint: string,
  customHeaders?: Record<string, string>
) => {
  if (!checkAuth()) {
    return;
  }

  try {
    const response = await axios.get(`${BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('accessToken')}`,
        ...customHeaders,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error in getMethod:', error);
    throw error;
  }
};
