var Twit = require('twit');

var bot = new Twit({
    consumer_key: process.env.BOTTWITAPP_CONSUMER_KEY,
    consumer_secret: process.env.BOTTWITAPP_CONSUMER_SECRET,
    access_token: process.env.BOTTWITAPP_ACCESS_TOKEN,
    access_token_secret: process.env.BOTTWITAPP_ACCESS_TOKEN_SECRET,
    timeout_ms: 60 * 1000
});

//update status with a tweet
var updateStatus = function(tweet) {
    bot.post('statuses/update', { status: tweet }, function(err, data, res) {
        if (err) {
            console.log(err);
        } else {
            console.log(data.text + ' was tweeted!.');
        }
    });
};
//updateStatus('twit bot is working...');

//Get a list of followers
var getListOfFollowers = function() {
        bot.get('followers/list', { screen_name: 'zagallai' }, function(err, data, response) {
            data.users.forEach(function(user) {
                console.log(user.screen_name);
                console.log(user.location);
                console.log('\n');
            });
        });
    }
    //getListOfFollowers();