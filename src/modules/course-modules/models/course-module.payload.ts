import { ApiProperty } from "@nestjs/swagger";

export class CoursePayload {

    @ApiProperty()
    public title: string;
    
}