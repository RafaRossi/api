import { ApiProperty } from "@nestjs/swagger";

export class JwtProxy {

  constructor(accessToken: string) {
    this.accessToken = accessToken;
  }

  @ApiProperty()
  public accessToken: string;

}