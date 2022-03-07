# Assingment-One



This web application scrap the information from a json file that contain tweeter user information and gives you information and lets you modify the content. 

**File Index.js**

    Contain: Rest API:

      1. 'app.get('/users', thisfunction)'
    
      2. 'app.post('/giveId', giveTimeText)'
    
      3. 'app.post('/screenName', updateScreenName)'
    
      4. 'app.post('/Tweet', updateTweet)'
    
      5. 'app.post('/Delete', deleteTweet)'
    
    *How to use:
     * app.get('/users', thisfunction) : this  get api lets the client see the user name, id, screen name, tweet, and created time.
     
     * app.post('/giveId', giveTimeText): this post api lets the client input an id and output the text and time of the tweet
     
     * app.post('/screenName', updateScreenName) : this post api lets the client update screen name given a user anme and screen name
     
     * app.post('/Tweet', updateTweet) : this post api lets the client update a tweet given user ID.
     
     * app.post('/Delete', deleteTweet) : this post api lets the client delete a tweet given user ID.
     
 **File : apps.js**
 
    Contians :
        1. A object that reads in favs.json file 
        2. A Person Object that contain an array of Name, ScreenName, id, createAt, tweet.
        
    Purpose : 
        The purpose of this file is to read the file and store the respected element needed to individual array in a Person Object.
        The programer can use this to manipulate the data in the file index.js
     
     
      
    
    

