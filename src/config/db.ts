import dotenv from 'dotenv';
dotenv.config();
export const dbConfig = {
  connectionString: process.env.CONNECTION_URI,
  database: 'learningappmongo',
  cosmos_endpoint: 'https://learningappmongo.mongo.cosmos.azure.com:10255/',
  cosmos_key:
    'lybD5Z8sm74fsdzNbL20QAsiehUMoMJcH2v97YmSy78QlV94Vx0UslObrubGeGc09v28qyU2kAk08IdnbS6KbQ==',
};
