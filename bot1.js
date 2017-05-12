var Discordie = require('discordie');

const Events = Discordie.Events;
const client = new Discordie();

client.connect({
  token: 'MjY1NDk0MjkxNTE2ODgyOTQ0.C0v8WA.X7omsegbBf2xMzHmirF--ljse-8'
});

client.DIspatcher.on(Event.GATEWAY_READY, e => {
  console.log('Connected as: '+ client.User.Username);
});

client.Dispatcher.on(Event.MESSAGE_CREATE, e => {
  if(e.message.content == 'PING'){
    e.message.channel.sendMessage('PONG');
  }
});
