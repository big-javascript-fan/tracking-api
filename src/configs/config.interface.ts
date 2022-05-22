import { Buffer } from 'buffer';

export interface Config {
  nest: NestConfig;
  cors: CorsConfig;
  swagger: SwaggerConfig;
  graphql: GraphqlConfig;
  security: SecurityConfig;
  sshTunnel: SshTunnelConfig;
  logger: LoggerConfig;
}

export interface BSCNetworkConfig {
  rpcProvider: string;
  nftABI: any;
  nftAddress: string;
}

export interface NestConfig {
  port: number;
}

export interface SendgridConfig {
  apikey: string;
}

export interface CorsConfig {
  enabled: boolean;
}

export interface SwaggerConfig {
  enabled: boolean;
  title: string;
  description: string;
  version: string;
  path: string;
}

export interface GraphqlConfig {
  playgroundEnabled: boolean;
  debug: boolean;
  schemaDestination: string;
  sortSchema: boolean;
}

export interface SecurityConfig {
  expiresIn: string;
  refreshIn: string;
  bcryptSaltOrRound: string | number;
}

export interface BucketConfig {
  key: string;
  url: string;
  secret: string;
  bucketName: string;
}

export interface SshTunnelConfig {
  username: string;
  dstHost: string;
  dstPort: number;
  privateKey: Buffer;
  passphrase?: string;
}

interface LoggerConfig {
  readonly level: string;
  readonly silence: string[];
}
