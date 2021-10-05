const { urlencoded } = require('express');
const express = require('express')
const app = express();
const port = 300
// para poder hacer peticiones desde el brauser(html) necesitamos utlizar cors
const cors = require('cors')   
var arr=[
    nombre='hola',
    edad=55
]

app.use(cors({
    origin: '*' // al poner * dara cualquier pagina que pida la solicitud
}))
app.use(express.json()) // nos ayuda a mandar informacion por body
//app.use(express.urlencoded())//buscar

app.get('/user/:id',(req, res)=>{
    console.log(req.query)
    console.log(req.params)
    res.send('estoy funcionando')
})


app.get('/',(req, res)=>{
    
    res.json(arr)
})

app.post('/',(req, res )=>{
    var amigo = req.body
    console.log(req.body)
    arr.push(amigo)
    res.send('got a post request')
})


app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user')
})
app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user')
})

app.listen(port,()=>{
    console.log(`te escucha en el puerto ${port}`)
})