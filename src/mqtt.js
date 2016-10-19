'use strict'

var mqtt = require('mqtt');
var client = mqtt.connect({ port: 1883, host: '192.168.0.1', keepalive: 10000})

// or var client = mqtt.connect({ port: 1883, host: '192.168.1.100', keepalive: 10000});
client.on('connect', function() {
    console.log('fila conectada...');
});
client.subscribe('presence')
client.publish('presence', 'bin hier')
client.on('message', function (topic, message) {
  console.log('Topic: ' + topic + ', Mensagem: '+ message)
})
client.end()