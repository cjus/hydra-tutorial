const hydraExpress = require('hydra-express');
const hydra = hydraExpress.getHydra();
const express = hydraExpress.getExpress();
let api = express.Router();

api.get('/hello', (req, res) => {
  res.json({
    result: {
      msg: `Hello from ${hydra.getServiceName()} - ${hydra.getInstanceID()} I offer green websocket pills.` 
    }
  });
});

let main = async () => {
  await hydraExpress.init(`${__dirname}/config.json`, () => {
    hydraExpress.registerRoutes({
      '/v1/green': api
    });

    hydra.on('message', (message) => {
      hydra.sendReplyMessage(message, {
        bdy: {
          message: `Message reply to mid (${message.mid}) by ${hydra.getServiceName()} instance ${hydra.getInstanceID()} I offer green websocket pills.`
        }
      });
    });    
  });
  let logEntry = `Started ${hydra.getServiceName()} (${hydra.getInstanceVersion()})`;
  console.log(logEntry);
};

main();
