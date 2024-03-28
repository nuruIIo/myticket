import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Request } from "express";
import { Observable } from "rxjs";

import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class CreatorGuard implements CanActivate {
    constructor(private readonly jwtService: JwtService) {}
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        
        const req: Request = context.switchToHttp().getRequest();

        const [bearer, token] = req.headers.authorization.split(" ");

        if(bearer !== "Bearer" || !token){
            throw new UnauthorizedException(" I don't know ")
        }

        const payload = this.jwtService.verify(token);

        if (payload.is_creator == true) {
            return true
        }
        throw new UnauthorizedException(" I don't know ");
    } 
}