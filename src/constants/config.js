export const isDev = process.env.NODE_ENV === 'development';
export const isProd = process.env.NODE_ENV === 'production';
export const proxy = 'http://localhost:3002';

const CONFIG = {
  url: 'http://localhost',
  port: '3002'
};

export const API = `${CONFIG.url}:${CONFIG.port}`;

export const API_URLS = {
  dev: `${proxy}/api`,
  prod: `${API}/api`,
};

export const API_URL = (isProd && API_URLS.prod) || (isDev && API_URLS.dev);
