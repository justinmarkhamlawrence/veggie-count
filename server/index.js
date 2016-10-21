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
app.use(bodyParser.json())
app.use('/', express.static(process.env.CLIENT_PATH));

// app.use('/', express.static('build'));

// User.create({name:'John'},(error, User)=>{
//   if (error) {
//     console.log(error)
//   }
//   console.log(User)
// })

app.get('/user', function(req, res) {
  User.find(function(err, user) {
    if(err) {
      return res.status(500).json({
        message: 'Internal Server Error'
      })
    }
    res.json(user)
  })
})

app.post('/user', function(req, res) {
  User.create({
    name:req.body.name
  }, function(err, user) {
    if (err) {
      return res.status(500).json({
        message: 'Internal Server Error'
      })
    }
    res.status(201).json(user)
  })
})

app.delete('/user/:id', function(req, res){
    // console.log(req.params.id + 'Delete this ID');
   User.remove(
       {_id:req.params.id},
       function(err, user) {
           if(err) {
               return res.status(500).json({
                   message: 'Internal Server Error'
               });
           }
           res.status(200).json(user);
           console.log('Delete user');
       }
   );


});

app.get('/user/veggie', function(req, res) {
  Veggie.find(function(err, veggie) {
    if(err) {
      return res.status(500).json({
        message: 'Internal Server Error'
      })
    }
    res.json(veggie)
  })
})

app.post('/user/veggie', function(req, res) {
  Veggie.create({
    name:req.body.name
  }, function(err, veggie) {
    if (err) {
      return res.status(500).json({
        message: 'Internal Server Error'
      })
    }
    res.status(201).json(veggie)
  })
})

app.delete('/user/veggie/:id', function(req, res){
    // console.log(req.params.id + 'Delete this ID');
   Veggie.remove(
       {_id:req.params.id},
       function(err, veggie) {
           if(err) {
               return res.status(500).json({
                   message: 'Internal Server Error'
               });
           }
           res.status(200).json(veggie);
           console.log('Delete veggie');
       }
   );


});

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
