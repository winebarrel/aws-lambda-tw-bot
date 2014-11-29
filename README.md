aws-lambda-tw-bot
=================

## Installation
```sh
gem install lambchop
git clone https://github.com/winebarrel/aws-lambda-tw-bot.git
cd aws-lambda-tw-bot
npm install twitter
export AWS_REGION=us-east-1
export LAMBDA_AWS_ACCESS_KEY_ID=...
export LAMBDA_AWS_SECRET_ACCESS_KEY=...
export LAMBDA_ROLE=arn:aws:iam::...:role/lambda_exec_role
export TWITTER_CONSUMER_KEY=...
export TWITTER_CONSUMER_SECRET=...
export TWITTER_ACCESS_TOKEN_KEY=...
export TWITTER_ACCESS_TOKEN_SECRET=...
```

## Upload function
```sh
./tw_bot.js
```

## Start bot
```sh
export AWS_REGION=us-east-1
echo '{}' | lambchop-cat tw-bot
```

## Stop bot
```sh
export AWS_REGION=us-east-1
echo '{"stop":true}' | lambchop-cat tw-bot
```
