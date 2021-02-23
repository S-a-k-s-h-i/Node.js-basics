import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';


@Injectable()
export class AuditMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next:Function) {
        console.log('LOGGING DELETE REQUEST IP',req.ip);
        console.log('LOGGING DELETE REQUEST PATH',req.path);
        console.log('LOGGING DELETE REQUEST HEADERS',req.headers);
        next();
    }

}