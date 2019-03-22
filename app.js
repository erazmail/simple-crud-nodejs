const express = require("express");
const bodyParser = require("body-parser");
const rp = require("request-promise");
const request = require('request');
var fs = require('fs');
const mysql = require('mysql');

/* Initialize app and configure bodyParser */
const port = process.env.PORT || 3001
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

/* CORS */
app.use((req, res, next) => {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*')

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'Origin,X-Requested-With,content-type')

  // Pass to next layer of middleware
  next()
})

eval(fs.readFileSync('config/database.js')+'');

eval(fs.readFileSync('controller/insert.js')+'');
eval(fs.readFileSync('controller/select.js')+'');
eval(fs.readFileSync('controller/delete.js')+'');

/* Serve API */
var instance = app.listen(port, () => {
    console.log(`listening on port ${port} !`)
  })