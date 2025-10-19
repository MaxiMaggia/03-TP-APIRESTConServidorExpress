import Server from './server.js';
import config from './config.js';

const server = new Server(config.PORT);
server.start();
