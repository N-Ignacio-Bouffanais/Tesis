var mqtt = require('mqtt');
var client = mqtt.connect("mqtt://192.168.18.33:1883");
var topic = "sensor";
var message ="probando";

client.on("message", (topic,message)=>{
  message = message.toString()
  console.log(message)
})

client.on("connect", ()=>{
  client.subscribe(topic)
  client.publish(topic,message)
})
