aws-lambda-tw-bot
=================

## Dependency
* [lambchop](https://github.com/winebarrel/lambchop)
* [node-twitter](https://www.npmjs.org/package/twitter)

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

## Cost per transaction
```
REPORT RequestId: c21c578d-776f-11e4-9b88-b730c83d5e8a	Duration: 10313.95 ms	Billed Duration: 10400 ms 
REPORT RequestId: ca238cc6-776f-11e4-a4ba-f5555f89c915	Duration: 10447.17 ms	Billed Duration: 10500 ms
REPORT RequestId: cbb3f123-776f-11e4-9d14-b5ee9efba728	Duration: 10354.55 ms	Billed Duration: 10400 ms
REPORT RequestId: cc1c0172-776f-11e4-99cc-fd9a3303a76b	Duration: 10353.32 ms	Billed Duration: 10400 ms
...
```

## Demo
* https://twitter.com/sgwr_dts_bot
