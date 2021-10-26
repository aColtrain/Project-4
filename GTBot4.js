console.log('The bot is starting');

var Twit = require('Twit');
//connect the access keys in config to GTBot3.js
var config = require('./config');
var T = new Twit (config);



// start stream and track tweets
//Will like and retweet everytime someone makes a post with #Dinosaur #dinosaurs #DrawDinovember

const stream = T.stream('statuses/filter', {track: '#Dinosaur, #dinosaurs, #DrawDinovember', language: 'en'});

// event handler

stream.on('tweet', tweet => {

   // retweet

T.post('statuses/retweet/:id', {id: tweet.id_str}, function(err, data, response) {
    console.log('Post was RETWEETED!!');
});

  // like

T.post('favorites/create', {id: tweet.id_str}, function(err, data, response) {
    console.log(data.statuses);
    console.log('Post was LIKED!!');
});

});