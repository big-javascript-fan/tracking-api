import * as fs from 'fs';
import { Config } from './config.interface';

const config: Config = {
  nest: {
    port: 3000
  },
  cors: {
    enabled: true
  },
  swagger: {
    enabled: true,
    title: 'Tracking',
    description: 'Tracking',
    version: '1',
    path: 'api'
  },
  graphql: {
    playgroundEnabled: true,
    debug: true,
    schemaDestination: './src/schema.graphql',
    sortSchema: true
  },
  security: {
    expiresIn: '2m',
    refreshIn: '30d',
    bcryptSaltOrRound: 10
  },
  sshTunnel: {
    username: process.env.SSH_TUNNEL_USER_NAME,
    dstHost: process.env.SSH_TUNNEL_USER_DESTINATION_HOST,
    dstPort: parseInt(process.env.SSH_TUNNEL_USER_DESTINATION_PORT, 10),
    privateKey:
      process.env.SSH_TUNNEL_PRIVATE_KEY &&
      fs.readFileSync(process.env.SSH_TUNNEL_PRIVATE_KEY)
  },
  logger: {
    level: 'info',
    silence: []
  }
};

export default (): Config => config;
