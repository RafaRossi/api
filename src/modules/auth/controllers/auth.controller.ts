import { Controller, Post, Req, UseGuards } from "@nestjs/common";
import {
  ApiBody,
  ApiOkResponse,
  ApiOperation,
  ApiTags
} from "@nestjs/swagger";
import { Request } from "express";
import { AuthService } from '../services/auth.service';
import { AuthGuard } from "@nestjs/passport";
import { LoginPayload } from "../models/login.payload";
import { JwtProxy } from "../models/jwt.proxy";
import { UserEntity } from "../../user/entities/user.entity";

@Controller('auth')
@ApiTags('auth')
export class AuthController {

  constructor(
    private readonly service: AuthService,
  ) { }

  @UseGuards(AuthGuard('local'))
  @Post('/local')
  @ApiOkResponse({ description: 'Usuário logado com sucesso.', type: JwtProxy })
  @ApiOperation({ summary: 'Autenticação do usuário' })
  @ApiBody({ type: LoginPayload })
  public async auth(@Req() request: any): Promise<JwtProxy> {
    return await this.service.login(request.user as UserEntity);
  }
}
