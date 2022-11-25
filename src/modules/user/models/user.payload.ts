import { ApiProperty } from "@nestjs/swagger";
import { IsEmail } from "class-validator";

export class UserPayload {
    @ApiProperty()
    public name: string;

    @ApiProperty()
    public imageUrl: string;

    @ApiProperty()
    @IsEmail({ message: 'É necessário enviar um e-mail válido.'})
    public email: string;

    @ApiProperty()
    public password: string;

    @ApiProperty({ default: true })
    public isActive: boolean;
}
