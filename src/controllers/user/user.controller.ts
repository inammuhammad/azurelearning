import {Request, Response} from 'express';
import { IUser } from '../../models/IUser';
import { SuccessResponse, ResponseStatusString } from '../../utils/app-response';

export class UserController {
    public static async List(req: Request, res: Response) {
        const users: IUser[] = [{
            email: 'user1@domain.com',
            id: 1,
            name: 'User 1'
        }, {
            email: 'user2@domain.com',
            id: 2,
            name: 'User 2'
        }, {
            email: 'user3@domain.com',
            id: 3,
            name: 'User 3'
        }];
        const response = new SuccessResponse(res, ResponseStatusString.SUCCESS, users);
        response.send();
    }
}