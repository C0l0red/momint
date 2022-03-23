import * as dotenv from 'dotenv';

dotenv.config();

const mongoose = require('mongoose');

export const { MONGO_URI } = process.env;

export const mongoConnectOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connect = () => {
  mongoose
    .connect(MONGO_URI, mongoConnectOptions)
    .then(() => {
      console.log('Successfully connected to database');
    })
    .catch((error: Error) => {
      console.log('Database connection failed. Exiting...');
      console.log(error);
      process.exit(1);
    });
};

export default connect;
