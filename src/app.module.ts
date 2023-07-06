import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BrandsModule } from './features/brand/brands.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppResolver } from './app.resolver';
import { BodyTypesModule } from './features/body-type/body-types.module';
import { CarModelModule } from './features/car-model/car-models.module';
import { ColorModule } from './features/color/color.module';
import { FuelTypesModule } from './features/fuel-type/fuel-types.module';
import { MakeYearModule } from './features/make-year/make-year.module';
import { CarVariantsModule } from './features/car-variant/car-variants.module';
import { GaragesModule } from './features/garage/garages.module';
import { SellerDetialsModule } from './features/seller-detail/seller-detials.module';
import { CarsModule } from './features/Car/cars.module';
import { AuthModule } from './features/auth/auth.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './features/auth/auth.controller';
import { AuthService } from './features/auth/auth.service';
import { BuyersModule } from './features/buyer/buyers.module';
import { CallTypeModule } from './features/call-type/call-types.module';
import { BuyerHasPurchaseDetailsModule } from './features/buyer-has-purchase-detail/buyer-has-purchase-detail.module';
import { TeleCallingEntryModule } from './features/tele-calling-entries/tele-calling-entries.module';
import { LeadSourceModule } from './features/lead-source/lead-source.module';
import { LeadTypeModule } from './features/lead-type/lead-types.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseConfigService } from './database/mongoose-config.service';
import databaseConfig from './config/database.config';
import appConfig from './config/app.config';
import emailConfig from './config/email.config';
import awsConfig from './config/aws.config';
import { DealersModule } from './features/dealers/dealers.module';
import jwtConfig from './config/jwt.config';
import { JwtStrategy } from './features/auth/strategies/jwt.strategy';
import { LocalStrategy } from './features/auth/strategies/local.strategy';
import { AlsStoreMiddleware } from './shared-modules/als-store/als-store.middleware';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [appConfig, databaseConfig, emailConfig, awsConfig, jwtConfig],
      expandVariables: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.graphql'),
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
    }),
    MongooseModule.forRootAsync({
      useClass: MongooseConfigService,
    }),
    BrandsModule,
    BodyTypesModule,
    CarModelModule,
    ColorModule,
    FuelTypesModule,
    MakeYearModule,
    CarVariantsModule,
    GaragesModule,
    SellerDetialsModule,
    CarsModule,
    AuthModule,
    PassportModule,
    BuyersModule,
    CallTypeModule,
    BuyerHasPurchaseDetailsModule,
    TeleCallingEntryModule,
    LeadSourceModule,
    LeadTypeModule,
    JwtModule.register({
      secret: 'mayank_tiwari',
      signOptions: { expiresIn: '1h' },
    }),
    DealersModule,
  ],
  /// TODO: imprort jwt at one place
  controllers: [AppController, AuthController],
  providers: [AppService, AppResolver, AuthService, JwtStrategy, LocalStrategy],
})
export class AppModule implements NestModule {

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AlsStoreMiddleware).forRoutes('/graphql');
  }

}
