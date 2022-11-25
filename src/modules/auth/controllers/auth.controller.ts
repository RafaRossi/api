import { Body, Controller, Post } from '@nestjs/common';
import {
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { AuthPayload } from '../models/auth.payload';
import { AuthService } from '../services/auth.service';
import { UserProxy } from "../../user/models/user.proxy";

@Controller('auth')
@ApiTags('auth')
export class AuthController {

  constructor(
    private readonly service: AuthService,
  ) { }

  @Post('/local')
  @ApiOkResponse({ description: 'Usuário logado com sucesso.' })
  @ApiOperation({ summary: 'Autenticação do usuário' })
  public async auth(@Body() authPayload: AuthPayload): Promise<UserProxy> {
    return await this.service.auth(authPayload).then(entity => new UserProxy(entity));
  }
}
