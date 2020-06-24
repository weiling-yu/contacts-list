const express = require('express');
const app = express();

var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'vickydb',
  port: 8889
});
 
connection.connect();

const PORT = process.env.PORT || 4001;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/contacts', (req, res, next) => {
    connection.query('SELECT * from contacts', function (error, results, fields) {
        if (error) {
            res.send(error);
        } else {
            res.send(results);
        }
      });
});

app.get('/contacts/delete/:full_name', (req, res, next) => {
  let deleteName = req.params.full_name;
  let query = `DELETE FROM contacts WHERE full_name='${deleteName}'`;

  connection.query(query, function (error, result, fields){
    if (error) {
      res.send(error);
    } else {  
      res.send({
        message: `Contact named ${deleteName} was deleted successfully!`
      });
    }
  });
});

app.get('/contacts/delete/:id', (req, res, next) => {
  let deleteId = req.params.id;
  let query = `DELETE FROM contacts WHERE id='${deleteId}'`;

  connection.query(query, function (error, result, fields){
    if (error) {
      res.send(error);
    } else {  
      res.send({
        message: `Contact named ${deleteId} was deleted successfully!`
      });
    }
  });
});

app.get('/contacts/delete_all', (req, res, next) => {
  let query = `DELETE FROM contacts`;

  connection.query(query, function (error, result, fields){
    if (error) {
      res.send(error);
    } else {  
      res.send({
        message: `Contact were deleted successfully!`
      });
    }
  });
});

app.get('/contacts/insert/:full_name/:email/:phone_number/:address/:dob_dd/:dob_mm/:dob_yy/:gender/:country', (req, res, next) => {
  let valueName = req.params.full_name;
  let valueEmail = req.params.email;
  let valueNumber = req.params.phone_number;
  let valueaddress = req.params.address;
  let valueDay = req.params.dob_dd;
  let valueMonth = req.params.dob_mm;
  let valueYear = req.params.dob_yy;
  let valueGender = req.params.gender;
  let valueCountry = req.params.country; 
  let query = `INSERT INTO contacts (full_name, email, phone_number, address, dob_dd, dob_mm, dob_yy, gender, country) 
    VALUES ("${valueName}", "${valueEmail}", "${valueNumber}", "${valueaddress}", ${valueDay}, ${valueMonth}, ${valueYear}, "${valueGender}", "${valueCountry}")`;          
  connection.query(query, function (error, result, fields){
    if (error) {
      res.send(error);
    } else {
      res.send({
        message: `Contact named ${valueName}, ${valueEmail}, ${valueNumber}, ${valueaddress}, ${valueDay}, ${valueMonth}, ${valueYear}, ${valueGender}, ${valueCountry} was inserted successfully!`
      });
    }
  });
});

app.get('/contacts/edit/:id/:full_name/:email/:phone_number/:address/:dob_dd/:dob_mm/:dob_yy/:gender/:country', (req, res, next) => {
  let editId = req.params.id;
  let editName = req.params.full_name;
  let editEmail = req.params.email;
  let editNumber = req.params.phone_number;
  let editaddress = req.params.address;
  let editDay = req.params.dob_dd;
  let editMonth = req.params.dob_mm;
  let editYear = req.params.dob_yy;
  let editGender = req.params.gender;
  let editCountry = req.params.country; 
  let query = `UPDATE contacts SET 
      full_name= "${editName}", email= "${editEmail}", phone_number= "${editNumber}", address= "${editaddress}", dob_dd= "${editDay}", dob_mm="${editMonth}", dob_yy="${editYear}", gender= "${editGender}", country= "${editCountry}"
      WHERE id=${editId}`;
  connection.query(query, function (error, result, fields){
    if (error) {
      res.send(error);
    } else {
      res.send({
        message: `Contact named ${editName} was edited successfully!`
      });
    }
  });
})



app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
 
// connection.end();