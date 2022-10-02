import {ApiProperty} from "@nestjs/swagger";

export class UserPayload{
    @ApiProperty()
    name: string;

    @ApiProperty()
    age: number;
}