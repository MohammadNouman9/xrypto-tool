import dotenv from 'dotenv';

dotenv.config();

export const config = {
  // Server
  PORT: process.env.PORT || 5000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  CORS_ORIGIN: process.env.CORS_ORIGIN || 'http://localhost:3000',

  // API Keys
  COINGLASS_API_KEY: process.env.COINGLASS_API_KEY || '',
  DERIBIT_API_KEY: process.env.DERIBIT_API_KEY || '',
  DERIBIT_SECRET: process.env.DERIBIT_SECRET || '',

  // Database
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/xrypto',

  // API Endpoints
  COINGLASS_BASE_URL: 'https://api.coinglass.com/api/v1',
  DERIBIT_BASE_URL: 'https://www.deribit.com/api/v2',

  // WebSocket
  WS_URL: process.env.WS_URL || 'http://localhost:5000'
};
