import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { environment } from "../../environment/environment";

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: environment.JWT_SECRET_KEY || 'CHANGE_THIS_SECRET',
    }),
  ],
  exports: [
    PassportModule,
    JwtModule,
  ],
})
export class AuthTokenModule {}
