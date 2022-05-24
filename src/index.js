import'dotenv/config'

import express from 'express'
import cors from 'cors'

const server = express();
server.use(cors());
server.use(express.json())

server.get('/somar/:numero',(req,resp)=>{
    
})

server.get('/dobro/:numero', (req, resp) =>{
    let numero = Number(req.params.numero);
    let dobro = numero  * 2;    

    resp.send({
        dobro: dobro
    });
})

server.get('/somar', (req, resp) => {
    let {a,b} = Number(req.query);

    let x = a + b; 

    resp.send({
        soma:x
    })
})

server.post('/somar', (req, resp) => {
    const {a, b} = req.body;

    const x = a + b; 

    resp.send({
        soma:x
    })
})

server.post('/media',(req, resp)=>{
    let {a,b,c}= req.body;
    
    let x = (a+b+c)/3;

    let p = x>=5;
    resp.send({
        media:p
    })
})


server.listen(process.env.PORT,
                ()=> console.log(`API online na porta ${process.env.PORT}`));