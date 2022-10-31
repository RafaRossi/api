import {ApiProperty} from "@nestjs/swagger";
import { IsEmail } from "class-validator";

export class UserPayload {
    @ApiProperty()
    name: string;

    @ApiProperty()
    birthday: string;

    @ApiProperty()
    @IsEmail({ message: 'É necessário enviar um e-mail válido.'})
    email: string;
  
    @ApiProperty()
    password: string;
  
    @ApiProperty({ default: true })
    isActive: boolean;
}