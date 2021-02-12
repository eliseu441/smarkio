const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

const textToSpeech = new TextToSpeechV1({
  authenticator: new IamAuthenticator({
    apikey: 'iS9D2hyfC3A-AbIAX4WSoXQEo4XFAX4T6ftbUpmOklyO',
  }),
  url: 'https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/c85a8a9c-0f22-48a6-a715-aa8117d85b3b',
});

module.exports = textToSpeech;
