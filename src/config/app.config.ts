import { registerAs } from '@nestjs/config';

const appConfig = registerAs('app', () => ({
  name: 'Carzy',
  server_port: 3000,
  app_env: process.env.APP_ENV,
}));

export default appConfig;
