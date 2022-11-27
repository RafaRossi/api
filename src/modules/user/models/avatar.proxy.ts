import { ApiProperty } from "@nestjs/swagger";

export class AvatarProxy {

  constructor(url: string) {
    this.imageUrl = url;
  }

  @ApiProperty()
  public imageUrl: string;

}
