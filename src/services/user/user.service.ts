import { IUser } from '../../models/IUser';
import { UserRepository } from '../../repositories/user/user.repository';

export class UserService {
    private repo = new UserRepository();

    public async create(user: IUser): Promise<IUser> {
        return this.repo.create(user);
    }

    public async list(): Promise<IUser[]> {
        return this.repo.list();
    }
}