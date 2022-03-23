import UsersService from './users.service';
import UsersController from './users.controller';
import { Router } from 'express';
import UserModel from './user.schema';
import NftModel from '../nfts/nft.schema';
import { param } from 'express-validator';
import validate from '../middleware/validation.middleware';

const usersService = new UsersService(UserModel, NftModel);
const usersController = new UsersController(usersService);

const router = Router();

router.get(
  '/:userid/nfts',
  validate([param('userid').isMongoId()]),
  usersController.getNfts.bind(usersController),
);

router.get(
  '/:userid/feed',
  validate([param('userid').isMongoId()]),
  usersController.getFeed.bind(usersController),
);

export default router;
