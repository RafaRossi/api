import { ApiProperty } from "@nestjs/swagger";

export class CoursePayload {
    @ApiProperty()
    public id: number;

    @ApiProperty()
    public name: string;
    
    @ApiProperty()
    public description: string;

    @ApiProperty()
    public imageUrl: string;
}