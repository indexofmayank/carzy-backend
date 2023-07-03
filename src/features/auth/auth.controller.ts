import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Response,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthenticateDto } from './auth.dto';
import { LocalAuthGuard } from './guards/local.auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post()
  @UseGuards(LocalAuthGuard)
  async login(@Response() res, @Body() authenticateDto: AuthenticateDto) {
    try {
      const response = await this.authService.authenticate(authenticateDto);
      return res.status(HttpStatus.OK).json({ response });
    } catch (error) {
      return res.status(error.status).json(error.response);
    }
  }

  // @Roles('customer')
  // @UseGuards(JwtAuthGuard)
  @Get()
  check(@Response() res, @Request() req): string {
    return res.status(200).json(req.user);
  }

  // @Roles('admin')
  // @UseGuards(JwtAuthGuard)
  @Get('check')
  manu(@Response() res): string {
    return res.status(200).send('Working');
  }
}
