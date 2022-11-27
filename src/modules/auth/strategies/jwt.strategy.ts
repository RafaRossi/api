import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { JwtPayload } from "../models/jwt.payload";
import { AuthService } from "../services/auth.service";
import { environment } from "../../../environment/environment";
import { UserEntity } from "../../user/entities/user.entity";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

  constructor(
    private readonly service: AuthService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: environment.JWT_SECRET_KEY || 'CHANGE_THIS_SECRET',
    });
  }

  public async validate(payload: JwtPayload): Promise<UserEntity> {
    return this.service.validateJwt(payload);
  }

}
