let five = require("johnny-five");
let board = new five.Board();
const app = require('express')();

const cors = require('cors')
app.use(cors());

board.on("ready", ()=>{//quando a placa estiver pronta, então...


  const led = new five.Led(8);

  app.get('/ligar', (req, res)=>{
    led.on();
    return res.json({data: 'ligou'});
  })

  app.get('/desligar', (req, res)=>{
    led.off();
    return res.json({data: 'desligou'});
  })


});

app.listen(3000, ()=>{//põe o servidor no ar
  console.log('Linstenning on port 3000');
})
