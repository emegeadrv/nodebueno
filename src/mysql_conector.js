//importar mysql
import mysql from 'mysql'
let todos
//crear la conexion
const conector = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mibd'
})

const conectar=()=>{
    conector.connect(err =>{
        if(err) throw err
        console.log('conectado')
    })
}

const agregarContacto=(numero, nombre) => {
    const sql = `INSERT INTO contactos (id_agenda, numero_contacto, nombre_contacto) VALUES (${null}, ${numero}, "${nombre}")`
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
    const sql = `DELETE FROM contactos where id_agenda=${id}`
    conector.query(sql)
}

export {conectar, agregarContacto, obteberContactos, borrarContacto}