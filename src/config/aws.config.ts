import { registerAs } from '@nestjs/config';

const awsConfig = registerAs('aws', () => ({
  access_key_id: process.env.AWS_ACCESS_KEY_ID,
  secret_access_key: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'ap-south',
  s3_bucket: process.env.S3_BUCKET,
}));

export default awsConfig;
