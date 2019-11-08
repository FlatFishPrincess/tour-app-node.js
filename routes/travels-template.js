import express from 'express';
import mysqlConnection from '../connection';

const router = express.Router();

router.get('/', (req, res) => {
  console.log('get travels');
  mysqlConnection.query('select * from travels', (err, result, fields) => {
    if(err){
      console.log(err);
    } else {
      res.send(result);
    }
  })
});

router.get('/:id', (req, res) => {
  console.log(`get travel with id: ${req.params.id}`);
  const queryString = 'select * from travels where id = ?';
  mysqlConnection.query(queryString, [req.params.id], (err, result, fields) => {
    if(err){
      console.log(err);
    } else {
      res.send(result);
    }
  })
});


router.post('/', (req, res) => {
  console.log('post travels');
  const queryString = 'insert into travels (name, location) values (?,?)';
  const data = req.body;
  console.log('data?',data);
  mysqlConnection.query(queryString,[data.name, data.location], (err, result, fields) => {
    if(err){
      console.log(err);
    } else {
      console.log(result);
      res.send(result.insertId);
    }
  })
});


router.delete('/:id', (req, res) => {
  console.log(`delete travel with id: ${req.params.id}`);
  // DELETE FROM `table_name` [WHERE condition];
  const queryString = 'delete from travels where id = ?';
  const id = parseInt(req.params.id, 10);
  mysqlConnection.query(queryString, [id], (err, result, fields) => {
    if(err){
      console.log(err);
    } else {
      console.log(result);
      res.send(result);
    }
  })
});


export default router;
