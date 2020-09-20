import {app} from './app';
import * as http from 'http';
import {MongoHelper} from "./mongo.helper";


const PORT = 8080;
const server = http.createServer(app);

server.listen(PORT);

server.on('listening' , async () =>{
   console.info(`Listening on ${PORT}`);
   try{
      await MongoHelper.connect('mongodb://192.168.50.105:27017');
      console.info('Connected to Mongo');
   }
   catch(err){
      console.error(err);
   }
});
