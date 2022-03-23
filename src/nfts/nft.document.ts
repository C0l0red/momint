import { Types } from 'mongoose';

export interface NftDocument {
  _id: Types.ObjectId;
  name: string;
  description: string;
  userId: Types.ObjectId;
}
