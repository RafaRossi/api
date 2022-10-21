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
    
    public listUsers: UserProxy[] = [];
    private idCount: number = 0;
    
    @Get('/list')
    @ApiOkResponse({ type: UserProxy, isArray: true})
    @ApiOperation({ summary: 'Retorna os dados de todos usuários.'})
    public getUsers(): UserProxy[] {
        return this.listUsers;
    }
    
    @Get(':userID')
    @ApiOperation({ summary: 'Retorna os dados de um usuário pela identificação.'})
    @ApiOkResponse({type: UserProxy})
    public getUser(@Param('userID') userID: string): UserProxy {
        const user = this.listUsers.find(user => user.id === +userID);
        
        if(!user) throw new NotFoundException('Usuário não existe.')
        
        return user;
    }
    
    @Post()
    @ApiOperation({ summary: 'Cria um usuário.'})
    @ApiOkResponse({type: UserProxy})
    public async postUser(@Body() user: UserPayload) : Promise<UserProxy> { 
           return await this.service.postUser(user).then(entity => new UserProxy(entity))
        };
    
    @Put(':userID')
    @ApiOperation({ summary: 'Atualiza um usuário pela identificação.'})
    @ApiOkResponse({type: UserProxy})
    public putUser(@Param('userID') userID: string, @Body() user: UserPayload) : UserProxy | undefined
    {
        const index = this.listUsers.findIndex(user => user.id === +userID);

        if(index === -1) throw new NotFoundException('Usuário não existe.')
    
        return undefined
    }
    
    @Delete(':userID')
    @ApiOperation({ summary: 'Deleta um usuário pela identificação.'})
    public deleteUser(@Param('userID') userID: string)
    {
        const index = this.listUsers.findIndex(user => user.id === +userID);
        
        if(index === -1) throw new NotFoundException("Usuário não encontrado");
        
        this.listUsers.splice(index, 1);
    }
}
