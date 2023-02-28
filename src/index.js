import express from 'express' //importar express
import {conectar, agregarContacto, obteberContactos, borrarContacto} from './src/mysql_conector.js'
let todos
const app = express()

//Iniciamos servidor
app.listen('8000',function(){
    console.log('aplicacion iniciada en el puerto 8000')
})


app.set('views','./src/vistas')
app.set('view engine','pug')


app.use(express.static('./src/vistas'))
app.use(express.static('./src'))
app.use(express.static('./css'))


app.get('/',function(req, res){
    /* res.send('ap iniciada') */
    todos=obteberContactos()
    res.render('index', {titulo:'Aplicacion de contactos', contactos:todos})
})
app.get('/agregar/:nombre/:numero', function(req, res){
    let nombre = req.params.nombre
    let numero = req.params.numero
    agregarContacto(numero, nombre)
    res.redirect('/')
})

app.get('/borrar/:id',function(req, res){
    let id = req.params.id
    borrarContacto(id)
    res.redirect('/')
})