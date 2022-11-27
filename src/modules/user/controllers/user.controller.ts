import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { UserPayload } from "../models/user.payload";
import { UserService } from '../services/user.service';
import { UserProxy } from '../models/user.proxy';
import { AvatarProxy } from "../models/avatar.proxy";
import { User } from "../../../decorators/user/user.decorator";
import { UserEntity } from "../entities/user.entity";
import { ProtectTo } from "../../../decorators/protect/protect.decorator";

@Controller('user')
@ApiTags('user')
export class UserController {

  constructor(
    private service: UserService,
  ) { }

  @Get('me')
  @ProtectTo()
  @ApiOkResponse({ type: UserProxy })
  @ApiOperation({ summary: 'Retorna os dados do usuário logado.'})
  public getMe(@User() user: UserEntity): UserProxy {
    return new UserProxy(user);
  }

  @Get()
  @ApiOkResponse({ type: UserProxy, isArray: true })
  @ApiOperation({ summary: 'Retorna os dados de todos usuários.'})
  public async getUsers(): Promise<UserProxy[]> {
    return await this.service.findAll().then(entities => entities.map(entity => new UserProxy(entity)));
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retorna os dados de um usuário pela identificação.'})
  @ApiOkResponse({ type: UserProxy })
  public async getUser(@Param('id') id: number): Promise<UserProxy> {
    return await this.service.findOne(+id).then(entity => new UserProxy(entity));
  }

  @Post()
  @ApiOperation({ summary: 'Cria um usuário.'})
  @ApiOkResponse({type: UserProxy})
  public async postUser(@Body() user: UserPayload): Promise<UserProxy> {
    return await this.service.create(user).then(entity => new UserProxy(entity));
  };

  @Put(':id')
  @ApiOperation({ summary: 'Atualiza um usuário pela identificação.'})
  @ApiOkResponse({type: UserProxy})
  public async putUser(@Param('id') id: number, @Body() user: UserPayload): Promise<UserProxy> {
    return await this.service.update(user, +id).then(entity => new UserProxy(entity));
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deleta um usuário pela identificação.'})
  public deleteUser(@Param('id') id: number): Promise<void> {
    return this.service.remove(+id);
  }

  @Get('avatar/:email')
  @ApiOperation({ summary: 'Obtém um avatar pelo email.'})
  public getAvatar(@Param('email') email: string): AvatarProxy {
    return this.service.getAvatarByEmail(email);
  }
}
