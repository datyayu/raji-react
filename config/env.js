/* Environment variables */
export const PORT = process.env.PORT || 3000;
export const HOST = process.env.HOST || 'localhost';

export const NODE_ENV = process.env.ENV || 'development';
export const __DEV__ = process.env.ENV !== 'production';
export const __PROD__ = process.env.ENV === 'production';
