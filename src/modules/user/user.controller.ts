import {Body, Controller, Delete, Get, NotFoundException, Param, Post, Put} from '@nestjs/common';
import {UserProxy} from "./user.proxy";
import {UserPayload} from "./user.payload";
import {ApiProperty} from "@nestjs/swagger";

@Controller('user')
export class UserController {
    
    public listUsers: UserProxy[] = [];
    private idCount: number = 0;
    
    @Get('/list')
    getUsers(): UserProxy[] {
        return this.listUsers;
    }
    
    @Get(':userID')
    getUser(@Param('userID') userID: string): UserProxy {
        const user = this.listUsers.find(user => user.id === +userID);
        
        if(!user) throw new NotFoundException('Usuário não existe.')
        
        return user;
    }
    
    @Post()
    postUser(@Body() user: UserPayload) : UserProxy
    {
        const userProxy = this.getProxyFromPayload(user);
        this.listUsers.push(userProxy);
        
        return userProxy;
    }
    
    @Put(':userID')
    putUser(@Param('userID') userID: string, @Body() user: UserPayload) : UserProxy
    {
        const index = this.listUsers.findIndex(user => user.id === +userID);

        if(index === -1) throw new NotFoundException('Usuário não existe.')
        
        return this.listUsers[index] = this.getProxyFromPayload(user, this.listUsers[index]);
    }
    
    @Delete(':userID')
    deleteUser(@Param('userID') userID: string)
    {
        const index = this.listUsers.findIndex(user => user.id === +userID);
        
        if(index === -1) throw new NotFoundException("Usuário não encontrado");
        
        this.listUsers.splice(index, 1);
    }
    
    private getProxyFromPayload(payload: UserPayload, proxy?: UserProxy): UserProxy
    {
        return new UserProxy(
            this.idCount + 1,
            payload.name || proxy?.name, 
            payload.age || proxy?.age);
    }
}
