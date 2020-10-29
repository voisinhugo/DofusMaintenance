# Dofus maintenance

This project provides tools to check automatically if the MMORPG Dofus has finished its weekly maintenance.

## Requirements

The check is done via the Twitter account of Dofus so you'll need an application linked to an approved developer account.

The program will send a notification via a Discord webhook so you'll need the credentials of a webhook on a Discord channel.

This project needs `nodeJS` to be installed on your device.

## Setup

To use the main script, please add:

- a `discord/auth.json` file with the `webhook_id` and `webhook_token` from an existing webhook on a Discord channel.

- a `twitter/auth.json` file with the `bearer_token` of an existing application, linked to an approved developer account.

Then to install dependencies, please run:

```sh
npm i
```

To run the app, please run:

```sh
npm run start
```

## Customization

The period between two Twitter checks can be set in `index.js`. As mentioned it requires a number of milliseconds.

This app can be changed easily to listen to any Twitter account by changing the `DOFUS_ACCOUNT_ID` constant from `twitter/getLastTweetFrom.js`.
