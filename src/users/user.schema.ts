import { Schema, model } from 'mongoose';
import { UserDocument } from './user.document';

const userSchema: Schema = new Schema<UserDocument>({
  _id: Schema.Types.ObjectId,
  name: String,
  wallets: [String],
  following: [Schema.Types.ObjectId],
});

const UserModel = model<UserDocument>('User', userSchema);

export default UserModel;
