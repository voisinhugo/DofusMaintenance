const axios = require('axios');
const twitterCredentials = require('./auth.json');

const BEARER_TOKEN = twitterCredentials.bearer_token;

const getLastTweetFrom = async (twitterAccount) => {
  const url = `https://api.twitter.com/2/tweets/search/recent?query=from:${twitterAccount}&tweet.fields=referenced_tweets`;
  const params = {
    headers: {
      Authorization: `Bearer ${BEARER_TOKEN}`
    }
  };

  const response = await axios.get(url, params);
  const tweets = response.data.data;
  const notRetweetTweets = tweets.filter((tweet) => !tweet.referenced_tweets);
  return notRetweetTweets[0];
};

exports.getLastTweetFrom = getLastTweetFrom;
