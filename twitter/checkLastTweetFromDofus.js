const { getLastTweetFrom } = require('./getLastTweetFrom');
const { doesContainAllKeywords } = require("../utils/doesContainAllKeywords");
const { isInLastHour } = require('../utils/isInLastHour');

const DOFUS_ACCOUNT_ID = "DOFUSfr";
const EXPECTED_KEYWORDS = ["maintenance", "#DOFUS"]

const checkLastTweetFromDofus = async () => {
  const lastTweet = await getLastTweetFrom(DOFUS_ACCOUNT_ID);
  const lastTweetText = lastTweet.text;
  const lastTweetDate = lastTweet.created_at;

  if (doesContainAllKeywords(lastTweetText, EXPECTED_KEYWORDS) && isInLastHour(lastTweetDate)) {
    return lastTweetText;
  }
};

exports.checkLastTweetFromDofus = checkLastTweetFromDofus;
