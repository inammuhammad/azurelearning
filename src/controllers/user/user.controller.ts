import {Request, Response} from 'express';
import { SuccessResponse, ResponseStatusString } from '../../utils/app-response';

export class UserController {
    public static async List(req: Request, res: Response) {
        const response = new SuccessResponse(res, ResponseStatusString.SUCCESS, 'List fetch success');
        response.send();
    }
}