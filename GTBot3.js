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


// Preset responses for #dino variations and #space
var replyDinoContent = ['WOW!', 'Cool!', 'I love dinosaurs <3', 'This looks like me!', 'Rawr-some', 'Dino-mite'];
var spaceReplies = ['Bad things come from space', 'A meteor killed my family', 'This content is too scary', 'I prefer whats on land', 'Space is dumb and scary', 'Stars are nice'];

//Params Specify which tag it gets
var params = {
    q: "#DrawDinovember",
    count: 1,
    result: "recent"
}

var params2 = {
    q: "#Dinosaur",
    count: 1,
    result: "recent"
}

var params3 = {
    q: "#Space",
    count: 1,
    result: "recent"
}
var params4 = {
    q: "#meteor",
    count: 1,
    result: "recent"
}

pre_id = 0;



function Dino(pre_id){
    //print rand nums
    console.log(rand);
    console.log(rand2);
    console.log("function started!")
    //get data that related to #DrawDinovember
    T.get('search/tweets', params, function(err, data) { 
        if (err) {
            console.log("something went wrong")
        } else {
            var tweets = data.statuses;
            for (var i = 0; i < tweets.length; i++) 
                //gets tweet id
                tweet_id = tweets[i].id_str;
                //finds username
                username = '@' + data.statuses[0].user.screen_name;
                if (pre_id != tweet_id && username != '@GTDinoBot') {
                    //random number used to randomly select a preset response
                    var rand = Math.floor(Math.random() * 6);
                    //posts a reply to someone who tweeted with #
                    T.post('statuses/update', {in_reply_to_status_id: tweet_id, status: username + ' ' + replyDinoContent[rand]}, function(err, response) {
                        if (response) {
                            //confirmation bot worked
                            console.log('Success! Check your bot, it should have replyed something.')
                            pre_id = tweet_id;
                        }
                    // If there was an error with our Twitter call, we print it out here.
                        if (err) {
                            console.log('There was an error with Twitter:', err);
                        }
                    })
                }
            }
        })
    
    //get data that related to #Dinosaur
    T.get('search/tweets', params2, function(err, data) { 
        if (err) {
            console.log("something went wrong")
        } else {
            var tweets = data.statuses;
            for (var i = 0; i < tweets.length; i++) {
                //gets tweet id
                tweet_id = tweets[i].id_str;
                //finds username
                username = '@' + data.statuses[0].user.screen_name;
                if (pre_id != tweet_id && username != '@GTDinoBot') {
                    //random number used to randomly select a preset response
                    var rand2 = Math.floor(Math.random() * 6);
                    //posts a reply to someone who tweeted with #
                    T.post('statuses/update', {in_reply_to_status_id: tweet_id, status: username + ' ' + replyDinoContent[rand2]}, function(err, response) {
                        if (response) {
                            //confirmation bot worked
                            console.log('Success! Check your bot, it should have replyed something.')
                            pre_id = tweet_id;
                        }
                    // If there was an error with our Twitter call, we print it out here.
                        if (err) {
                            console.log('There was an error with Twitter:', err);
                        }
                    })
                    
                }
            }
        }
    })
    //get data that related to #space
    T.get('search/tweets', params3, function(err, data) { 
        if (err) {
            console.log("something went wrong")
        } else {
            var tweets = data.statuses;
            for (var i = 0; i < tweets.length; i++) {
                //gets tweet id
                tweet_id = tweets[i].id_str;
                //finds username
                username = '@' + data.statuses[0].user.screen_name;
                if (pre_id != tweet_id && username != '@GTDinoBot') {
                    //random number used to randomly select a preset response
                    var rand = Math.floor(Math.random() * 6);
                    //posts a reply to someone who tweeted with #
                    T.post('statuses/update', {in_reply_to_status_id: tweet_id, status: username + ' ' + spaceReplies[rand]}, function(err, response) {
                        if (response) {
                            //confirmation bot worked
                            console.log('Success! Check your bot, it should have replyed something.')
                            pre_id = tweet_id;
                        }
                    // If there was an error with our Twitter call, we print it out here.
                        if (err) {
                            console.log('There was an error with Twitter:', err);
                        }
                    })
                    
                }
            }
        }
    })
    //get data that related to #meteor
    T.get('search/tweets', params4, function(err, data) { 
        if (err) {
            console.log("something went wrong")
        } else {
            var tweets = data.statuses;
            for (var i = 0; i < tweets.length; i++) {
                //gets tweet id
                tweet_id = tweets[i].id_str;
                //finds username
                username = '@' + data.statuses[0].user.screen_name;
                if (pre_id != tweet_id && username != '@GTDinoBot') {
                    //random number used to randomly select a preset response
                    var rand2 = Math.floor(Math.random() * 6);
                    //posts a reply to someone who tweeted with #
                    T.post('statuses/update', {in_reply_to_status_id: tweet_id, status: username + ' ' + spaceReplies[rand2]}, function(err, response) {
                        if (response) {
                            //confirmation bot worked
                            console.log('Success! Check your bot, it should have replyed something.')
                            pre_id = tweet_id;
                        }
                    // If there was an error with our Twitter call, we print it out here.
                        if (err) {
                            console.log('There was an error with Twitter:', err);
                        }
                    })
                    
                }
            }
        }
    })
}
//setInterval post every 12 hours
setInterval(Dino, 1000*60*60*12);
