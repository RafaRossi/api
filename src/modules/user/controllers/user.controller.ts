import {Body, Controller, Delete, Get, NotFoundException, Param, Post, Put} from '@nestjs/common';
import {UserPayload} from "../models/user.payload";
import {ApiOkResponse, ApiOperation, ApiProperty, ApiTags} from "@nestjs/swagger";
import { truncate } from 'fs';
import { UserService } from '../services/user.service';
import { UserProxy } from '../models/user.proxy';

@Controller('user')
@ApiTags('user')
export class UserController {

    constructor(
        private service: UserService,
    ){}

    
    @Get('/list')
    @ApiOkResponse({ type: UserProxy, isArray: true})
    @ApiOperation({ summary: 'Retorna os dados de todos usuários.'})
    public async getUsers(): Promise<UserProxy[]> {
        return await this.service.findAll();
    }
    
    @Get(':userID')
    @ApiOperation({ summary: 'Retorna os dados de um usuário pela identificação.'})
    @ApiOkResponse({type: UserProxy})
    public async getUser(@Param('userID') userID: number): Promise<UserProxy> {
        return await this.service.findOne(userID);
    }
    
    @Post()
    @ApiOperation({ summary: 'Cria um usuário.'})
    @ApiOkResponse({type: UserProxy})
    public async postUser(@Body() user: UserPayload) : Promise<UserProxy> { 
           return await this.service.create(user).then(entity => new UserProxy(entity))
        };
    
    @Put(':userID')
    @ApiOperation({ summary: 'Atualiza um usuário pela identificação.'})
    @ApiOkResponse({type: UserProxy})
    public async putUser(@Param('userID') userID: number, @Body() user: UserPayload) : Promise<UserProxy>
    {
        return await this.service.update(user, userID);
    }
    
    @Delete(':userID')
    @ApiOperation({ summary: 'Deleta um usuário pela identificação.'})
    public deleteUser(@Param('userID') userID: string)
    {
        return;
    }
}
