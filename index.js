const { checkLastTweetFromDofus } = require('./twitter/checkLastTweetFromDofus');
const { sendDiscordMessage } = require('./discord/sendDiscordMessage');
const { sleep } = require('./utils/sleep');

// As we have limitation on Twitter API, we should define a period
// between two calls, set in milliseconds.
const TWITTER_REQUESTS_PERIOD = 5000;

const main = async () => {
  var endCondition = true;

  while (endCondition) {
    const lastTweet = await checkLastTweetFromDofus();
    if (lastTweet) {
      sendDiscordMessage(lastTweet);
      endCondition = false;
    } else {
      console.log("Maintenance is not finished yet!");
    }
    await sleep(TWITTER_REQUESTS_PERIOD);
  }
};

main();
