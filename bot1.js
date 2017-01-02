var Discordie = require('discordie');

const Events = Discordie.Events;
const client = new Diacordie();

client.connect({
  token: 'MjY1NDgzMTYxNTg3Mjg2MDE3.C0vyGg.4mtGzJr4bHG1VsU7EuH1VBgck8Y'
});

client.DIspatcher.on(Event.GATEWAY_READY, e => {
  console.log('Connected as: '+ client.User.Username);
});

client.Dispatcher.on(Event.MESSAGE_CREATE, e => {
  if(e.message.content == 'PING'){
    e.message.channel.sendMessage('PONG');
  }
});
