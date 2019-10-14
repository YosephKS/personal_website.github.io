const nodemailer = require('nodemailer');
var express = require('express')
var app = express()

var port = process.env.PORT || 4000;

let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
      type: 'OAuth2',
      clientId: '906575927935-e1ksiltu4flq3krmvr4vcrgp1mag9qrp.apps.googleusercontent.com',
      clientSecret: '1KAZy5yZUL2cItEDRpKBf-_a', 
  }
});

app.get('/', function(req, res) {
  transporter.sendMail({
    from: 'yosephkurniasoenggoro@gmail.com',
    to: '116010352@link.cuhk.edu.cn',
    subject: '[NO REPLY] Notification on Message',
    text: 'Thank you for your message.',
    auth: {
        user: 'yosephkurniasoenggoro@gmail.com',
        refreshToken: '1/oD8ByPv7ysubpYvMIC1yX9htkJfB5KPubigAlRfAGpw',
        accessToken: 'ya29.Il-bB2ZEz2l2JHqsrGJ2R1u6ki8qwcnhDmR_GZ1IWosmq3i1w1zyLcAu4GRTJm1ZlOF5an4lRRz7br6EhCpi7paYO0Nh4dz4z5kPIjD154X3Vsd6P0WdJajfPXpRCQAfKw'
    }
  });

  transporter.sendMail({
    from: 'yosephkurniasoenggoro@gmail.com',
    to: 'yosephkurniasoenggoro@gmail.com',
    subject: 'This is the message from the users.',
    text: 'Thank you for your message. ',
    auth: {
        user: 'yosephkurniasoenggoro@gmail.com',
        refreshToken: '1/oD8ByPv7ysubpYvMIC1yX9htkJfB5KPubigAlRfAGpw',
        accessToken: 'ya29.Il-bB2ZEz2l2JHqsrGJ2R1u6ki8qwcnhDmR_GZ1IWosmq3i1w1zyLcAu4GRTJm1ZlOF5an4lRRz7br6EhCpi7paYO0Nh4dz4z5kPIjD154X3Vsd6P0WdJajfPXpRCQAfKw'
    }
  });

  res.send("Message successfully sent");
});

// Launch app to listen to specified port
app.listen(port, function () {
  console.log("Running RestHub on port " + port);
});