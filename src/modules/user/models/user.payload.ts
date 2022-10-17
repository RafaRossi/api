import {ApiProperty} from "@nestjs/swagger";

export class UserPayload{
    @ApiProperty()
    name: string;

    @ApiProperty()
    birthday: string;

    @ApiProperty()
    email: string;
  
    @ApiProperty()
    password: string;
  
    @ApiProperty({ default: true })
    isActive: boolean;
}