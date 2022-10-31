import { ApiProperty } from "@nestjs/swagger";
import { IsEmail } from "class-validator";

export class AuthPayload {

    @ApiProperty()
    @IsEmail({ message: 'É necessário enviar um e-mail válido.'})
    public email: string;

    @ApiProperty()
    public password: string;
}