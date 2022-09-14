import { Post, UseGuards, Request, Get } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { UsersService } from './users/users.service';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService, private readonly userService: UsersService) {}

  @Post('auth/register')
  async register(@Request() req) {
    return this.authService.register(req.body);
  }
  
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Post('user')
  newUser(@Request() req) {
    return this.userService.create(req.user);
  }
}
