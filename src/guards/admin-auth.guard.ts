import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();

    const authHeader = req.headers.authorization;
    if (!authHeader) {
      throw new UnauthorizedException({
        message: "Admin royxatdan otmagan1",
      });
    }

    const bearer = authHeader.split(" ")[0];
    const token = authHeader.split(" ")[1];

    if (bearer !== "Bearer" || !token) {
      throw new UnauthorizedException({
        message: "Admin royxatdan otmagan2",
      });
    }

    let admin: any;
    try {
      admin = this.jwtService.verify(token);
    } catch (error) {
      throw new UnauthorizedException({
        message: "Admin royxatdan otmagan3",
      });
    }
    req.admin = admin;
    
    console.log(req);

    return true;
  }
}
