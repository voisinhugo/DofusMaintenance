const { getLastTweetFrom } = require('./getLastTweetFrom');
const { doesContainAllKeywords } = require("../utils/doesContainAllKeywords");

const DOFUS_ACCOUNT_ID = "DOFUSfr";
const EXPECTED_KEYWORDS = ["maintenance", "#DOFUS"]

const checkLastTweetFromDofus = async () => {
  const lastTweet = await getLastTweetFrom(DOFUS_ACCOUNT_ID);
  const lastTweetText = lastTweet.text;

  if (doesContainAllKeywords(lastTweetText, EXPECTED_KEYWORDS)) {
    return lastTweetText;
  }
};

exports.checkLastTweetFromDofus = checkLastTweetFromDofus;
