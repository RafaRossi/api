import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from "@nestjs/jwt";
import * as bcryptjs from 'bcryptjs';
import { UserService } from 'src/modules/user/services/user.service';
import { UserEntity } from '../../user/entities/user.entity';
import { JwtProxy } from "../models/jwt.proxy";
import { LoginPayload } from "../models/login.payload";
import { JwtPayload } from "../models/jwt.payload";

@Injectable()
export class AuthService {

  constructor(
    private userService: UserService,
    private readonly jwtService: JwtService,
  ) { }

  public async auth(authPayload: LoginPayload): Promise<UserEntity> {
    const { password, username } = authPayload;

    const user = await this.userService.getRepository().findOne({
      where: {
        email: username,
      },
    });

    const passwordMatch = bcryptjs.compare(user?.password || '', password);

    if (!user || !passwordMatch)
      throw new UnauthorizedException('Usuário ou senha incorretos');

    return user;
  }

  public async login(user: UserEntity): Promise<JwtProxy> {
    const jwtPayload = { id: user.id };

    const accessToken = await this.jwtService.signAsync(jwtPayload, { expiresIn: '7d' });

    return new JwtProxy(accessToken);
  }

  public async validateJwt(payload: JwtPayload): Promise<UserEntity> {
    return await this.userService.findOne(payload.id);
  }
}
