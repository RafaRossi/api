import {ApiProperty} from "@nestjs/swagger";
import { UserEntity } from "../entities/user.entity";

export class UserProxy {

    constructor(
      entity: UserEntity
    ) {
        this.id = entity.id;
        this.name = entity.name;
        this.imageUrl = entity.imageUrl;
    }

    @ApiProperty()
    public id: number;

    @ApiProperty()
    public name: string;

    @ApiProperty()
    public imageUrl: string;
}
