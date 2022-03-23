import UserModel from '../users/user.schema';
import NftModel from '../nfts/nft.schema';
import { mongoConnectOptions, MONGO_URI } from '../config/database.config';
const mongoose = require('mongoose');

const nfts = [
  {
    _id: {
      $oid: '621e8a3476e4fbccc4fbf720',
    },
    name: 'NFT 1',
    description: 'Text and shit',
    userId: {
      $oid: '621e8a1076e4fbccc4fbf71d',
    },
  },
  {
    _id: {
      $oid: '621e8afe76e4fbccc4fbf72a',
    },
    name: 'NFT 2',
    description: 'Text and shit',
    userId: {
      $oid: '621e89d176e4fbccc4fbf71b',
    },
  },
  {
    _id: {
      $oid: '621e8b1a76e4fbccc4fbf72f',
    },
    name: 'NFT 3',
    description: 'Text and shit',
    userId: {
      $oid: '621e89ef76e4fbccc4fbf71c',
    },
  },
  {
    _id: {
      $oid: '621e8b4376e4fbccc4fbf73c',
    },
    name: 'NFT 4',
    description: 'Text and shit',
    userId: {
      $oid: '621e890176e4fbccc4fbf71a',
    },
  },
  {
    _id: {
      $oid: '621e917476e4fbccc4fbf74c',
    },
    name: 'NFT 5',
    description: 'Text and shit',
    userId: {
      $oid: '621e8a1076e4fbccc4fbf71d',
    },
  },
  {
    _id: {
      $oid: '621e917976e4fbccc4fbf74d',
    },
    name: 'NFT 6',
    description: 'Text and shit',
    userId: {
      $oid: '621e8a1076e4fbccc4fbf71d',
    },
  },
  {
    _id: {
      $oid: '621e917f76e4fbccc4fbf74e',
    },
    name: 'NFT 7',
    description: 'Text and shit',
    userId: {
      $oid: '621e8a1076e4fbccc4fbf71d',
    },
  },
];

const users = [
  {
    _id: {
      $oid: '621e890176e4fbccc4fbf71a',
    },
    name: 'John Snow',
    wallets: ['0xFE0E0034dC33A166A830a0DA151A34E5550824a8'],
  },
  {
    _id: {
      $oid: '621e89d176e4fbccc4fbf71b',
    },
    name: 'Elon Musk',
    wallets: ['0xFE0E0034dC33A166A830a0DA151A34E5550824a8'],
  },
  {
    _id: {
      $oid: '621e89ef76e4fbccc4fbf71c',
    },
    name: 'Jeff Bazos',
    wallets: ['0xFE0E0034dC33A166A830a0DA151A34E5550824a8'],
  },
  {
    _id: {
      $oid: '621e8a1076e4fbccc4fbf71d',
    },
    name: 'Pepe',
    wallets: ['0xFE0E0034dC33A166A830a0DA151A34E5550824a8'],
    following: [
      {
        $oid: '621e89ef76e4fbccc4fbf71c',
      },
      {
        $oid: '621e89d176e4fbccc4fbf71b',
      },
      {
        $oid: '621e890176e4fbccc4fbf71a',
      },
    ],
  },
];

async function createUsers() {
  const userObjects = users.map((user) => {
    return {
      ...user,
      _id: user._id['$oid'],
      following: user.following?.map(
        (followingObject) => followingObject['$oid'],
      ),
    };
  });

  UserModel.insertMany(userObjects)
    .then(() => {
      console.log('Users Successfully created');
    })
    .catch((err) => {
      console.log('Error while creating Users', err);
    });

  return;
}

async function createNfts() {
  const nftObjects = nfts.map((nft) => ({
    ...nft,
    _id: nft._id['$oid'],
    userId: nft.userId['$oid'],
  }));

  NftModel.insertMany(nftObjects)
    .then(() => {
      console.log('Nfts Successfully created');
    })
    .catch((err) => {
      console.log('Error while creating Nfts', err);
    });
}

async function runMigrations() {
  await mongoose.connect(MONGO_URI, mongoConnectOptions);
  await mongoose.connection?.dropDatabase();

  await createUsers();
  await createNfts();
}

runMigrations()
  .then(() => {
    setTimeout(() => {
      console.log('All done');
      process.exit(1);
    }, 4000);
  })
  .catch((error) => console.log(error));
