const sequelize = require("./config/sequelize.js");
const mensaje = require("./models/mensaje.js");

const conectarDB = async () => {
    try {
        //en vez de Poll.connect()
        await sequelize.authenticate()
        console.log("Conexión exitosa")
    } catch (error) {
        console.error("Error de conexión:", error)
    }
}

const sincronizarDB = async () => {
    try {
        await sequelize.sync()
        console.log("Tablas sincronizadas")
    } catch (error) {
        console.error(error)
    }
}

//Insertando un mensaje en la tabla mensajes
//A través del modelo mensaje  
const crearMensaje = async () => {
    const nuevoMensaje = await mensaje.create(
        {
            contenido: "Hola, este es un mensaje desde un ORM",
            fecha: new Date()
        }
    );
    console.log(nuevoMensaje.toJSON());
}

const verTodosLosMensajes = async () => {
    //Select en SQL, pero a través del modelo mensaje
    const mensajes = await mensaje.findAll();
    console.table(mensajes.map(m => m.toJSON()));
}   

const main = async () => {
await conectarDB();
await sincronizarDB();
await crearMensaje();
await verTodosLosMensajes();
}

main();