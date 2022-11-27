import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "../services/auth.service";
import { UserEntity } from "../../user/entities/user.entity";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {

  constructor(
    private service: AuthService,
  ) {
    super();
  }

  public async validate(username: string, password: string): Promise<UserEntity> {
    return await this.service.auth({ username, password });
  }

}
