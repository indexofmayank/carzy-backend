import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { DealersModule } from '../dealers/dealers.module';
import { EmployeeModule } from '../dealers/employee/employee.module';
import { JwtModule } from '@nestjs/jwt';
import { AlsStoreModule } from 'src/shared-modules/als-store/als-store.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService, AuthResolver],
  exports: [AuthService, DealersModule],
  imports: [
    DealersModule,
    AlsStoreModule,
    JwtModule.register({
      secret: 'mayank_tiwari',
      signOptions: { expiresIn: '1h' },
    }),
  ],
})
export class AuthModule { }
