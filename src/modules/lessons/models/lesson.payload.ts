import { ApiProperty } from "@nestjs/swagger";

export class LessonPayload {

    @ApiProperty()
    public title: string;

    @ApiProperty()
    public videoUrl: string;

    @ApiProperty()
    public courseModuleId: number;
    
}
