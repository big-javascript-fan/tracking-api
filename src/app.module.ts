import { GraphQLModule } from '@nestjs/graphql';
import { Logger, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TerminusModule } from '@nestjs/terminus';
import { AppController } from './controllers/app.controller';
import { AppResolver } from './resolvers/app.resolver';
import { DateScalar } from './common/scalars/date.scalar';
import config from './configs/config';
import { GraphqlConfig } from './configs/config.interface';
import { BigIntScalar } from './common/scalars/bigint.scalar';
import { TrackingService } from './services/tracking.service';
import { PrismaService } from './services/prisma.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [config] }),
    GraphQLModule.forRootAsync({
      useFactory: async (configService: ConfigService) => {
        const graphqlConfig = configService.get<GraphqlConfig>('graphql');
        return {
          installSubscriptionHandlers: true,
          emitTypenameField: true,
          buildSchemaOptions: {
            numberScalarMode: 'integer'
          },
          sortSchema: graphqlConfig.sortSchema,
          autoSchemaFile:
            graphqlConfig.schemaDestination || './src/schema.graphql',
          debug: graphqlConfig.debug,
          formatError: error => {
            Logger.warn(error);
            return error;
          },
          playground: graphqlConfig.playgroundEnabled,
          context: ({ req }) => ({ req })
        };
      },
      inject: [ConfigService]
    }),
    AppModule,
    TerminusModule
  ],
  controllers: [AppController],
  providers: [
    TrackingService,
    AppResolver,
    PrismaService,
    DateScalar,
    BigIntScalar
  ],
  exports: [TrackingService]
})
export class AppModule {}
