import UserModel from './user.schema';
import NftModel from '../nfts/nft.schema';

export default class UsersService {
  constructor(
    private readonly userModel: typeof UserModel,
    private readonly nftModel: typeof NftModel,
  ) {}

  async getNfts(userId: string, limit: number, skip: number) {
    return this.nftModel.find({ userId: userId }).limit(limit).skip(skip);
  }

  async getFeed(userId: string, limit: number, skip: number) {
    const user = await this.userModel.findById(userId).exec();

    return this.nftModel
      .find({ userId: { $in: user?.following } })
      .limit(limit)
      .skip(skip);
  }
}
