import mongoose from 'mongoose';

export interface IUser extends mongoose.Document {
    id: number;
    name: string;
    email: string;
}

const schema = new mongoose.Schema(
    {
        id: {type: Number, required: true},
        name: {type: String, required: true},
        email: {type: String, required: true}
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export const UserModel = mongoose.model<IUser>(
  'Users',
  schema
);
