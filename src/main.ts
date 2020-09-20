import {app} from './app';
import * as http from 'http';
import {MongoHelper} from "./mongo.helper";
import mongoose, {mongo} from 'mongoose';

const PORT = 8080;
const MONGO_URI = "mongodb://192.168.50.105:27017/todo";
const server = http.createServer(app);

server.listen(PORT);

server.on('listening' , async () =>{
   console.info(`Listening on ${PORT}`);
   mongoose.connect(MONGO_URI , {useNewUrlParser: true});
   mongoose.connection.on('open', () => {
      console.info('Connected to Mongo ');
   });
   mongoose.connection.on('error' , (err: any) =>{
      console.error(err);
   });

});
