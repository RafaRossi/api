import {Body, Controller, Delete, Get, NotFoundException, Param, Post, Put} from '@nestjs/common';
import {UserProxy} from "./user.proxy";
import {UserPayload} from "./user.payload";

@Controller('user')
export class UserController {
    
    public listUsers: UserProxy[] = [];
    
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
    postUser(@Body() user: UserProxy) : UserProxy
    {
        this.listUsers.push(user);
        
        return user;
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
        const user = this.listUsers.find(user => user.id === +userID);
        
        if(!user) throw new NotFoundException("Usuário não encontrado");
        
        
    }
    
    private getProxyFromPayload(payload: UserPayload, proxy: UserProxy): UserProxy
    {
        return new UserProxy(
            proxy.id,
            payload.name || proxy.name, 
            payload.age || proxy.age);
    }
}
