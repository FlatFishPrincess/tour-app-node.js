import express from 'express';
import mysqlConnection from '../connection';

const router = express.Router();

router.get('/', (req, res) => {
  console.log('get travels');
  mysqlConnection.query('select * from travels', (err, rows, fields) => {
    if(err){
      console.log(err);
    } else {
      res.send(rows);
    }
  })
});


export default router;