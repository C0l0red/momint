import NftsService from './nfts.service';
import { NextFunction, Request, Response } from 'express';

export default class NftsController {
  constructor(private readonly nftsService: NftsService) {}

  async getOwner(req: Request, res: Response, next: NextFunction) {
    const nftId: string = req.params.nftid;

    const owner = await this.nftsService.getOwner(nftId);

    res.json(owner);
  }
}
