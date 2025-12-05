
import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UnauthorizedException,
  UseGuards
} from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { Public } from './auth-dacorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: Record<string, any>) {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

 
@Public() // deixa login público
@Post('login')
async login(@Body() body) {
  const collaborator = await this.authService.validateCollaborator(
    body.email,
    body.password,
  );

  if (!collaborator) {
    throw new UnauthorizedException("Invalid credentials");
  }

  return this.authService.login(collaborator);
}

}




