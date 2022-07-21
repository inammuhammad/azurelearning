import {Request, Response} from 'express';
import { IUser } from '../../models/IUser';
import { UserService } from '../../services/user/user.service';
import { SuccessResponse, ResponseStatusString, BadRequestResponse } from '../../utils/app-response';

export class UserController {
    public static async List(req: Request, res: Response) {
        const userService: UserService = new UserService();
        const users: IUser[] = await userService.list();
        const response = new SuccessResponse(res, ResponseStatusString.SUCCESS, users);
        response.send();
    }

    public static async Create(req: Request, res: Response) {
        const user: IUser = {...req.body} as any;
        const userService: UserService = new UserService();
        let response: SuccessResponse | BadRequestResponse | undefined = undefined;
        await userService.create(user)
                .then(resp => response = new SuccessResponse(res, ResponseStatusString.SUCCESS, resp))
                .catch(error => response = new BadRequestResponse(res, error))
                .finally(() => response?.send());
    }
}