//importar mysql
import mysql from 'mysql'
let todos
//crear la conexion
const conector = mysql.createConnection({
    host: 'db4free.net',
    user: 'migueldespliegue',
    password: '12345678',
    database: 'migueldespliegue'
})

const conectar=()=>{
    conector.connect(err =>{
        if(err) throw err
        console.log('conectado')
    })
}

const agregarContacto=(numero, nombre) => {
    const sql = `INSERT INTO contactos (id_contacto, numero_contacto, nombre_contacto) VALUES (${null}, ${numero}, "${nombre}")`
    conector.query(sql, function(err, result, filed){
        if(err)throw err
        console.log(result)
    })
}

const obteberContactos = () => {
    const sql='SELECT * FROM contactos'
    conector.query(sql, function(err,result,field){
        todos=result
    })
    return todos
}

const borrarContacto= id => {
    const sql = `DELETE FROM contactos where id_contacto=${id}`
    conector.query(sql)
}

export {conectar, agregarContacto, obteberContactos, borrarContacto}