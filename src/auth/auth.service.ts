
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    collaboratorService: any;
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async signIn(
    username: string,
    pass: string,
  ): Promise<{ access_token: string }> {
    const user = await this.usersService.findOne(username);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.userId, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async validateCollaborator(email: string, password: string) {
  const collaborator = await this.collaboratorService.findByEmail(email);

  if (!collaborator) return null;
  if (collaborator.password !== password) return null;

  return collaborator;
}

async login(collaborator: any) {
  const payload = {
    sub: collaborator.id,
    email: collaborator.email,
  };

  return {
    access_token: this.jwtService.sign(payload),
  };
}

}

