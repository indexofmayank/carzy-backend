import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  MongooseModuleOptions,
  MongooseOptionsFactory,
} from '@nestjs/mongoose';

@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
  constructor(private readonly configService: ConfigService) { }

  createMongooseOptions():
    | MongooseModuleOptions
    | Promise<MongooseModuleOptions> {
    const dbUserName = this.configService.get<string>('database.user');
    const dbPassword = this.configService.get<string>('database.password');
    const dbUrl = this.configService.get<string>('database.uri');
    const uri = `mongodb+srv://${dbUserName}:${dbPassword}@${dbUrl}/?retryWrites=true&w=majority`;
    console.log(uri);

    return {
      uri,
    };
  }
}
