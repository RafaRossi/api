import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsNumber } from "class-validator";

export class UserCoursePayload {
  @ApiProperty()
  @IsDefined({ message: 'O usuário deve ser definido' })
  @IsNumber()
  public userId: number;

  @ApiProperty()
  @IsDefined({ message: 'O curso deve ser definido' })
  @IsNumber()
  public courseId: number;
}
