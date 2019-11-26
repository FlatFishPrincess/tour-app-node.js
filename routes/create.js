const express = require("express");
const router = express.Router();
const mysqlConnection = require('../connection.js');
const path = require("path");
const multer = require("multer");

//create user
router.post('/user',(req,res) =>{
    const data = req.body;
    const queryString = 'INSERT INTO siteUser VALUES (?,?,?,?,?,?,?,?,?)';
    var params = [data.userId,data.username,data.password,data.photo,data.profile,
                data.firstName,data.lastName,data.email,data.phoneNum];  
    mysqlConnection.query(queryString,params,(err,result)=>{
        if(err){
          console.log(err);
          res.send(err);
        }else{
          console.log("create user success")
          res.send(result);
        //   res.redirect('/');
        }
    })
});
 
//create administer
router.post('/admin',(req,res) =>{
    const data = req.body;
    const queryString = 'INSERT INTO admin VALUES (?,?,?)';
    var params = [data.adminId,data.adminname,data.adminpassword];  
    mysqlConnection.query(queryString,params,(err,result)=>{
        if(err){
            console.log(err);
        }else{
            console.log("create admin success")
            // res.redirect('/');
        }
    })
});

let index = 0;

const storage = multer.diskStorage({
    destination: "public/reviews/",
    filename: function(req, file, cb){
      // console.log('storage???: ',file.originalname, path.extname(file.originalname),'index?',index);
       cb(null,`${req.params.reviewId}-${index++}${path.extname(file.originalname)}`);
    }
  });

const upload = multer({
  storage: storage,
  limits:{fileSize: 3000000},
}).array("reviewImages");
  
router.post('/uploads/:reviewId', function (req, res) {
  upload(req, res, function (err) {
    console.log("Request file ---", req.files, req.params.reviewId); //Here you get file.
    // if no error, update user photo
    if(!err) {
      const queryString = 'INSERT INTO reviewimage VALUES ?';
      const paramArr = [];
      req.files.map(file => {
        paramArr.push([null, req.params.reviewId, file.path]);
      })
      mysqlConnection.query(queryString, [paramArr], (err, result, fields) => {
        if(err){
          console.log(err);
          // res.sendStatus(404);
        } else {
          console.log("succeed to edit user");
          res.sendStatus(200);
        }
      });
    }
  });
})

//createReview 
// router.post('/review', (req, res) => {
//   const queryString = 'insert into review values (?,?,?,?,?,?,?)';
//   const data = req.body;
//   console.log('req???',req);
//   console.log('create reivew??', data);
//   var params = [data.reviewId,data.createdDate,data.reviewDescription,
//               data.rating,data.userId,data.locationId,data.title];
//     new Promise((resolve, reject) => {
//       mysqlConnection.query(queryString, params, (err, result) => {
//         if(err){
//           return reject(err);
//         }
//         resolve(result);
//       })
//     })
//     .then(result => {
//       console.log('Promise result?? and the review id?', result.insertId);
//       const reviewId = result.insertId;
//       updateReviewPhotos(reviewId);
//       return 
//     })
//     .catch(err => console.log('Error: ',err))
      
// });


//createReview 
router.post('/review', (req, res) => {
    const queryString = 'insert into review values (?,?,?,?,?,?,?)';
    const data = req.body;
    var params = [data.reviewId,data.createdDate,data.reviewDescription,
                data.rating,data.userId,data.locationId,data.title];
    mysqlConnection.query(queryString,params, (err, result, fields) => {
        if(err){
        console.log(err);
        } else {
            console.log("succeed to post review", result);
            // updateReviewPhotos();
            res.status(200).send(result.insertId.toString());
        }
    })
});

//"userID":"john123","createdDate":"09/01/19","comment":"you so good","reviewId":"1"
//Create Comment 
router.post('/comment', (req, res) => {
    const queryString = 'insert into comment values (?,?,?,?,?)';
    const data = req.body;
    var params = [data.commentId,data.userId,data.createdDate,data.comment,data.reviewId];
    mysqlConnection.query(queryString,params, (err, result, fields) => {
        if(err){
        console.log(err);
        } else {
        console.log("succeed to post comment");
        res.send(result);
        // res.redirect('/');
        }
    })
});
  
//Create Location 
router.post('/location', (req, res) => {
    const queryString = 'insert into location values (?,?,?,?)';
    const data = req.body;
    var params = [data.locationId,data.name,data.country,data.description];
    mysqlConnection.query(queryString,params, (err, result, fields) => {
        if(err){
        console.log(err);
        } else {
        console.log("succeed to set location");
        res.send(result);
        // res.redirect('/');
        }
    })
});

module.exports = router;
  