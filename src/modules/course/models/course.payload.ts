import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsString } from "class-validator";

export class CoursePayload {

  @ApiProperty()
  @IsDefined({ message: 'O nome do curso deve ser definido' })
  @IsString()
  public name: string;

  @ApiProperty()
  @IsDefined({ message: 'A descrição do curso deve ser definida' })
  @IsString()
  public description: string;

  @ApiProperty()
  @IsDefined({ message: 'O autor do curso deve ser definido' })
  @IsString()
  public author: string;

  @ApiProperty()
  @IsDefined({ message: 'A categoria do curso deve ser definida' })
  @IsString()
  public category: string;

  @ApiProperty()
  @IsDefined({ message: 'A imagem deve ser definida' })
  @IsString()
  public imageUrl: string;
}
