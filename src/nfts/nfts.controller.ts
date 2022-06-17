import NftsService from './nfts.service';
import { NextFunction, Request, Response } from 'express';

export default class NftsController {
  constructor(private readonly nftsService: NftsService) {}

  async getOwner(req: Request, res: Response, next: NextFunction) {
    try {
      const nftId: string = req.params.nftid;

      const data = await this.nftsService.getOwner(nftId);

      res.json({ message: 'NFT Owner fetched successfully', data });
    } catch (error) {
      next(error);
    }
  }
}
