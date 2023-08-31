import * as Joi from 'joi'

export interface IAppConfig {
  JWT_CONSTANT: string,
  APP_PORT: number,
  // DB_SCHEMA: string
}

export const APP_CONFIG_DEFAULTS: Partial<IAppConfig> = {
  JWT_CONSTANT: 'Pch0YtgCv9mI5dh',
  APP_PORT: 3000,
  // DB_SCHEMA: '',
}

type AppConfigKeys = {
  [K in keyof IAppConfig]:
    | Joi.StringSchema
    | Joi.NumberSchema
    | Joi.BooleanSchema
}

export const configKeys: AppConfigKeys = {
  // Add keys for validation here when updating .env
  JWT_CONSTANT: Joi.string().trim().allow('').default(APP_CONFIG_DEFAULTS.JWT_CONSTANT),
  APP_PORT: Joi.number()
  .positive()
  .required()
  .default(APP_CONFIG_DEFAULTS.APP_PORT)
  .failover(APP_CONFIG_DEFAULTS.APP_PORT),
  // DB_HOST: Joi.string().required(),
  // DB_NAME: Joi.string().required(),
  // DB_USER: Joi.string().required(),
  // DB_PASSWORD: Joi.string().required(),
  // DB_PORT: Joi.string().required(),
  // DB_SCHEMA: Joi.string()
  //   .trim()
  //   .allow('')
  //   .default(APP_CONFIG_DEFAULTS.DB_SCHEMA),
  // LS_DB_HOST: Joi.string().required(),
  // LS_DB_NAME: Joi.string().required(),
  // LS_DB_USER: Joi.string().required(),
  // LS_DB_PASSWORD: Joi.string().required(),
  // LS_DB_PORT: Joi.string().required(),
  // LS_DB_SCHEMA: Joi.string()
  //   .trim()
  //   .allow('')
  //   .default(APP_CONFIG_DEFAULTS.DB_SCHEMA),
  // ROUTE_GUARD_SECURITY_TOKEN: Joi.string()
  //   .trim()
  //   .allow('')
  //   .default(APP_CONFIG_DEFAULTS.ROUTE_GUARD_SECURITY_TOKEN),
}

export const envSchema = Joi.object<IAppConfig>().keys(configKeys).unknown()
