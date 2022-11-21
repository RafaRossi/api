import { ApiProperty } from "@nestjs/swagger";

export class LessonPayload {

    @ApiProperty()
    public title: string;

    @ApiProperty()
    public courseModuleId: number;
    
}
