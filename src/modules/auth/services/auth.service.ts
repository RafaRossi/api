import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UserService } from 'src/modules/user/services/user.service';
import { AuthPayload } from '../models/auth.payload';
@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
  ) {}

  public async auth(authPayload: AuthPayload): Promise<void> {
    const { password, email } = authPayload;
    
    const user = await this.userService.getRepository().findOne({
        where: {
            email,
            password
        }
    })

    if(!user)
        throw new UnauthorizedException('Usuário ou senha incorretos')

    return;
    }
}