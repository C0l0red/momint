import { Schema, model } from 'mongoose';
import { NftDocument } from './nft.document';

const nftSchema: Schema = new Schema<NftDocument>({
  _id: Schema.Types.ObjectId,
  name: String,
  description: String,
  userId: Schema.Types.ObjectId,
});

const NftModel = model<NftDocument>('Nft', nftSchema);

export default NftModel;
