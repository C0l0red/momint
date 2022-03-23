import { Types } from 'mongoose';

export interface UserDocument {
  _id: Types.ObjectId;
  name: string;
  wallets: string[];
  following: Types.ObjectId[];
}
