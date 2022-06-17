import UsersService from './users.service';
import { NextFunction, Request, Response } from 'express';

export default class UsersController {
  constructor(private readonly usersService: UsersService) {}

  async getNfts(req: Request, res: Response, next: NextFunction) {
    const id: string = req.params.userid;

    const limit: number = parseInt(req.query.limit as string);
    const skip: number = parseInt(req.query.skip as string);

    const data = await this.usersService.getNfts(id, limit, skip);

    res.json({message: 'User NFTs fetched successfully', data});
  }

  async getFeed(req: Request, res: Response, next: NextFunction) {
    const id: string = req.params.userid;

    const limit: number = parseInt(req.query.limit as string);
    const skip: number = parseInt(req.query.skip as string);

    const data = await this.usersService.getFeed(id, limit, skip);

    res.json({message: 'User Feed fetched successfully', data});
  }
}
