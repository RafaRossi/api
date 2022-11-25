import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcryptjs from 'bcryptjs';
import { UserService } from 'src/modules/user/services/user.service';
import { UserEntity } from '../../user/entities/user.entity';
import { AuthPayload } from '../models/auth.payload';

@Injectable()
export class AuthService {

  constructor(
    private userService: UserService
  ) { }

  public async auth(authPayload: AuthPayload): Promise<UserEntity> {
    const { password, email } = authPayload;

    const user = await this.userService.getRepository().findOne({
      where: {
        email,
      },
    });

    const passwordMatch = bcryptjs.compare(user.password, password);

    if (!user || !passwordMatch)
      throw new UnauthorizedException('Usuário ou senha incorretos');

    return user;
  }
}
