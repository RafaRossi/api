import {ApiProperty} from "@nestjs/swagger";
import { UserEntity } from "../entities/user.entity";

export class UserProxy{
    constructor(entity: UserEntity) {
        this.id = entity.id;
        this.name = entity.name;
        this.birthday = entity.birthday;
    }

    @ApiProperty()
    id: number;

    @ApiProperty()
    name: string;
    
    @ApiProperty()
    birthday: string;
}