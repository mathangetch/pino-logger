const express = require('express');
const  pino = require("pino") 
const logger = pino({
    transport:{
        target:"pino-pretty",
        options:{
            translateTime:"SYS:dd-mm-yyyy HH:MM:ss",
            //ignore:"pid,hostname",
            
        }
    }
})
const app = express()

const port =4040;

app.get('/test',(req,res)=>{
    logger.info("testing pino")
    logger.error("testing pino")
    logger.warn("testing pino")
    //logger.info("testing pino")
    res.status(200).send("testing pino")
})

app.listen(port,()=>{
    console.log('server connection success')
})