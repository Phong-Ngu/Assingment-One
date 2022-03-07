const express = require('express');
var fs = require('fs');
var read_Data = fs.readFileSync('favs.json');
var jsonObj = JSON.parse(read_Data);

// make a person array 
var person = [];

// store all user infromation in object array
for (i in jsonObj){

person[i] = {
  Name:  jsonObj[i].user.name,
  ScreenName: jsonObj[i].user.screen_name,
  id: jsonObj[i].user.id_str,
  createdAt : jsonObj[i].created_at,
  tweet : jsonObj[i].text,
}

}

//export so we can access in index.js
exports.person = person;
