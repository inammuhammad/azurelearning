import { IUser, UserModel } from '../../models/IUser';

export class UserRepository {
    async create(data: IUser): Promise<any> {
        return await UserModel.create(data);
    }

    async list(): Promise<any> {
        return await UserModel.find();
    }
}