#!/usr/bin/env lambchop -e
/*
function_name: tw-bot
role: <%= ENV["LAMBDA_ROLE"] %>
handler: tw_bot.handler
timeout: 60
*/
var AWS = require('aws-sdk');
var lambda = new AWS.Lambda({
  accessKeyId: '<%= ENV["LAMBDA_AWS_ACCESS_KEY_ID"] %>',
  secretAccessKey: '<%= ENV["LAMBDA_AWS_SECRET_ACCESS_KEY"] %>',
  region: 'us-east-1'
});

var twitter = require('twitter');
var bot = new twitter({
  consumer_key:        '<%= ENV["TWITTER_CONSUMER_KEY"] %>',
  consumer_secret:     '<%= ENV["TWITTER_CONSUMER_SECRET"] %>',
  access_token_key:    '<%= ENV["TWITTER_ACCESS_TOKEN_KEY"] %>',
  access_token_secret: '<%= ENV["TWITTER_ACCESS_TOKEN_SECRET"] %>'
})

exports.handler = function(event, context) {
  if (event.stop) {
    lambda.deleteFunction({FunctionName: 'tw-bot'}, function(err, data) {
      if (err) { throw err; }
      context.done();
    });
  } else {
    bot.updateStatus('にゃーん (' + new Date() + ')', function(data) {
      setTimeout(function() {
        var params = {
          FunctionName: 'tw-bot',
          InvokeArgs: '{}'
        };

        lambda.invokeAsync(params, function(err, data) {
          if (err) { throw err; }
          context.done();
        });
      }, 10000);
    })
  }
};
