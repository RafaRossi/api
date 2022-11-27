import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsEmail, IsOptional, IsString } from "class-validator";

export class UserPayload {
  @ApiProperty()
  @IsDefined({ message: 'O nome deve ser definido' })
  @IsString()
  public name: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  public imageUrl?: string;

  @ApiProperty()
  @IsDefined({ message: 'O email deve ser definido' })
  @IsString()
  @IsEmail({ message: 'É necessário enviar um e-mail válido.'})
  public email: string;

  @ApiProperty()
  public password: string;

  @ApiProperty({ default: true })
  public isActive: boolean;
}
