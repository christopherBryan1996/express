const express = require('express')
const app = express()
const port=300

app.get('/',(req, res)=>{
    res.send('hola mundo!')
})

app.listen(port,()=>{
    console.log(`te escucha en http://localhost:${port}`)
})