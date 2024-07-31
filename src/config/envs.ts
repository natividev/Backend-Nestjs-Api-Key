import * as joi from 'joi';
import 'dotenv/config';

interface EnvVars {
  PORT: number;
  API_KEY: string;
}

const envsSchema = joi
  .object({
    PORT: joi.number().required(),
    API_KEY: joi.string().required(),
  })
  .unknown(true);

const { error, value } = envsSchema.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const envsVars: EnvVars = value;

export const envs = {
  port: envsVars.PORT,
  apiKey: envsVars.API_KEY,
};
