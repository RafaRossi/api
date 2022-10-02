import {ApiProperty} from "@nestjs/swagger";

export class UserProxy{
    constructor(id: number, name: string, age: number) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    @ApiProperty()
    id: number;

    @ApiProperty()
    name: string;
    
    @ApiProperty()
    age: number;
}