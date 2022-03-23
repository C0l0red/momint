import * as http from 'http';
import app from './app';
import * as dotenv from 'dotenv';

dotenv.config();

const server = http.createServer(app);
const { PORT } = process.env;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
