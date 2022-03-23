import NftsService from './nfts.service';
import NftsController from './nfts.controller';
import { Router } from 'express';
import NftModel from './nft.schema';
import UserModel from '../users/user.schema';
import validate from '../middleware/validation.middleware';
import { param } from 'express-validator';

const nftService = new NftsService(NftModel, UserModel);
const nftsController = new NftsController(nftService);

const router = Router();

router.get(
  '/:nftid/owner',
  validate([param('nftid').isMongoId()]),
  nftsController.getOwner.bind(nftsController),
);

export default router;
