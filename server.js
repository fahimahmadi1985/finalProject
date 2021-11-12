const http = require('http');
const express = require('express');
const cors = require('cors');
const { rootHandler, userHandler } = require('./controller/userController');
const { logger, checkLogin } = require('./middleware/middlewares');
const userRouter = require('./router/userRouter');

const server = express();

/* middleware */
server.use(cors())
server.use(express.urlencoded({ extended: false }));
server.use(express.json());
server.use(logger);
server.use(checkLogin);

/* Routers */
server.use('/users', userRouter);



const port = process.env.PORT || 5000;
server.listen(port, ()=>{console.log('Server is running on port', port)})