import 'babel-polyfill';
import express from 'express';
import {HOST ,PORT, DATABASE_URL} from './config'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import User from './models/user'
import Veggie from './models/veggies'

//const HOST = process.env.HOST;
//const PORT = process.env.PORT || 7000;

console.log(`Server running in ${process.env.NODE_ENV} mode`);

const app = express();

app.use('/', express.static(process.env.CLIENT_PATH));

// app.use('/', express.static('build'));

User.create({name:'John'},(error, User)=>{
  if (error) {
    console.log(error)
  }
  console.log(User)
})

function runServer(callback) {
    return new Promise((resolve, reject) => {
        mongoose.connect(DATABASE_URL, function(err) {
          if (err && callback) {
              return callback(err);
          }
          mongoose.connection.on('error', function(err) {
              console.error('Could not connect.  Error:', err);
          });
        })
        app.listen(PORT, HOST, (err) => {
            if (err) {
                console.error(err);
                reject(err);
            }

            const host = HOST || 'localhost';
            console.log(`Listening on ${host}:${PORT}`);
        });
    })
}

if (require.main === module) {
  runServer(err => {
    if (err) {
      console.error(err)
    }
  })
}
