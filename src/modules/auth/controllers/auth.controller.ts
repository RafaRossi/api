import {Body, Controller, Post} from '@nestjs/common';
import {ApiOkResponse, ApiOperation, ApiProperty, ApiTags} from "@nestjs/swagger";
import { AuthPayload } from '../models/auth.payload';
import { AuthService } from '../services/auth.service';

@Controller('auth')
@ApiTags('auth')
export class AuthController {

    constructor(
        private service: AuthService,
    ){}
    
    @Post('/local')
    @ApiOkResponse({ description: 'Usuário logado com sucesso.'})
    @ApiOperation({ summary: 'Autenticação do usuário'})
    public async auth(@Body() authPayload: AuthPayload): Promise<void> {
        return await this.service.auth(authPayload);
    }
    
}
