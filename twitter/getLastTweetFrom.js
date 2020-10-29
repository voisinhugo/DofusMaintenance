const axios = require('axios');
const twitterCredentials = require('./auth.json');

const BEARER_TOKEN = twitterCredentials.bearer_token;

const getLastTweetFrom = async (twitterAccount) => {
  const url = `https://api.twitter.com/2/tweets/search/recent?query=from:${twitterAccount}`;
  const params = {
    headers: {
      Authorization: `Bearer ${BEARER_TOKEN}`
    }
  };

  const response = await axios.get(url, params);
  return response.data.data[0];
};

exports.getLastTweetFrom = getLastTweetFrom;
