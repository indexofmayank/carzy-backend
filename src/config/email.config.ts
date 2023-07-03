import { registerAs } from '@nestjs/config';

const emailConfig = registerAs('email', () => ({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  username: process.env.MAIL_USERNAME,
  password: process.env.MAIL_PASSWORD,
  encryption: process.env.MAIL_ENCRYPTION,
  from: process.env.MAIL_FROM_ADDRESS,
  from_name: process.env.MAIL_FROM_NAME,
}));

export default emailConfig;
