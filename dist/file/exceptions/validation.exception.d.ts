import { HttpException } from "@nestjs/common";
export declare class ValidationException extends HttpException {
    messages: string | Record<string, any>;
    constructor(response: string | Record<string, any>);
}
