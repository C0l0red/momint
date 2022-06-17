import { Types } from 'mongoose';

export interface NftDocument {
  _id: Types.ObjectId;
  name: string;
  description: string;
  contract: {
    address: string;
    blockchain: string;
  };
  tokenId: {
    _hex: string;
    _isBigNumber: boolean;
  };
  userId: Types.ObjectId;
}
