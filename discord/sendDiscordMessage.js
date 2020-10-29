const axios = require('axios');
const webhook = require('./auth.json');

const DISCORD_WEBHOOK_ID = webhook.webhook_id;
const DISCORD_WEBHOOK_TOKEN = webhook.webhook_token;
const DISCORD_WEBHOOK = `https://discord.com/api/webhooks/${DISCORD_WEBHOOK_ID}/${DISCORD_WEBHOOK_TOKEN}`;

const sendDiscordMessage = async (message) => {
  const content = { "content": message };

  try {
    const response = await axios.post(DISCORD_WEBHOOK, content);
    console.log(`Discord status code: ${response.status}`);
  } catch(error) {
    console.error(error);
  }
};

exports.sendDiscordMessage = sendDiscordMessage;
