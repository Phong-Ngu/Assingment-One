
const { response } = require('express');
const express = require('express');
const { json } = require('express/lib/response');
const { request } = require('http');
const app = express();

// set port number
const Port = 3000;
var fs = require('fs');
// link apps.js object to index.js
let appRef = require('./apps.js');

// make public folder static
app.use(express.static('public'));
// use express
app.use(express.json());
app.use(express.urlencoded({extended:false}));

  // print out user_id,created time,tweet,user name, and user screen name.
  app.get('/users',thisfunction);
  
  function thisfunction(request,response){

   var reply = JSON.stringify(appRef.person);
  
   response.send(reply);
  }

  //  gets the user id as a parameter
    app.post('/giveId', giveTimeText);
  // function gets id from clients and prints out time an tweet text

  function giveTimeText(request, response)
  {
    var ids = request.body.UserId;
    var reply ;
    for( var i=0; i < appRef.person.length; i++){

    if(appRef.person[i].id == ids){

      reply = {
        createdTime : appRef.person[i].createdAt,
        Tweet : appRef.person[i].tweet,
      }
        
    }
  }
  response.json(reply,null, 2);  // show the created time and tweet text
}

// make a post to client to update screen name
app.post('/screenName', updateScreenName);

// function to update new screen name
function updateScreenName(request, response)
{
  var name = request.body._name;   // user name
  var oldScreenName= request.body._screenName; // old screen name
  var newScreenName = request.body._newSN;  // new screen name

  var reply ;
  for( var i=0; i < appRef.person.length; i++){

  // compare screen name and user name 
  if(appRef.person[i].ScreenName == oldScreenName && appRef.person[i].Name == name){

      appRef.person[i].ScreenName = newScreenName;

    reply = {
     Current_Screen_Name: appRef.person[i].ScreenName,
    
    }
  }
}
response.json(reply);
}

// make a post to add a tweet
app.post('/Tweet', updateTweet);

// function to update tweet given id and new tweet
function updateTweet(request, response)
{
  var _id = request.body._id;   // user id
  var newtweet = request.body._text; // new tweet from user

  var reply ;
  for( var i=0; i < appRef.person.length; i++){

  if(appRef.person[i].id == _id){

      appRef.person[i].tweet = newtweet;

    reply = {
     New_Tweet: appRef.person[i].tweet,
    }
  }
}
response.json(reply);
}


// make a post to delete tweet.
app.post('/Delete', deleteTweet);

// function to delete tweet from /Delete post
function deleteTweet(request, response)
{
  var id = request.body._UserId;
  

  var reply ;
  for( var i=0; i < appRef.person.length; i++){

  if(appRef.person[i].id == id){

      appRef.person[i].tweet = "null"; // set to null whne post is deleted

    reply = {
     New_Tweet: appRef.person[i].tweet,  
    }
  }
}
response.json(reply);  // should display empty array. 
}
//create port and listen to incoming server. if text appear in terminal then we are connected.


function test_print(){

  console.log("test code");
}
app.listen(Port, () => console.log('Example app listening on port',Port));
