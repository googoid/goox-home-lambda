const { APP_ID } = require('./lib/constants');
const Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback) {
  const alexa = Alexa.handler(event, context, callback);

  alexa.appId = APP_ID;
  alexa.execute();
};
