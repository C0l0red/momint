import NftModel from './nft.schema';
import UserModel from '../users/user.schema';

export default class NftsService {
  constructor(
    private readonly nftModel: typeof NftModel,
    private readonly userModel: typeof UserModel,
  ) {}

  async getOwner(nftId: string) {
    const nft = await this.nftModel.findById(nftId).exec();

    return this.userModel.findById(nft?.userId);
  }
}
