/*var express = require('express');
var router = express.Router();

/* GET users listing. */
/*router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;*/
/*Nuevo*/
let express = require('express');
let router = express.Router();

let mongoose = require('./../config/conexion');
let Persona = require('./../models/persona');

router.post('/persona/operar', (req, res, next) => {
  console.log(req.body);  

  if (req.body._id === "") {
    let per = new Persona({
      nombre: req.body.nombre,
      mensaje: req.body.mensaje
    });
    
    per.save();
  } else {    
    //console.log(req.body._id);
    Persona.findByIdAndUpdate(req.body._id, { $set: req.body }, { new: true }, (err, model) => {
      if (err) throw err;
    });
  }
  res.redirect('/');
});

module.exports = router;
