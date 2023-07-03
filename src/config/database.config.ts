import { registerAs } from '@nestjs/config';

const databaseConfig = registerAs('database', () => {
  return {
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    uri: process.env.DATABASE_URL,
  };
});

export default databaseConfig;
