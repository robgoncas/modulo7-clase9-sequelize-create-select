# Acceso a Datos con ORM Sequelize

## Clase 1 -- Introducción y Entidades No Relacionadas

### Aprendizaje Esperado

Implementar la capa de acceso a datos utilizando un ORM con entidades no
relacionadas.

------------------------------------------------------------------------

# 1. Objetivo de la clase

Al finalizar esta clase los estudiantes podrán:

-   Comprender qué es un ORM
-   Instalar Sequelize
-   Conectar Node.js con PostgreSQL
-   Crear modelos (entidades)
-   Sincronizar tablas automáticamente
-   Insertar y consultar datos usando Sequelize

------------------------------------------------------------------------

# 2. ¿Qué es un ORM?

ORM significa **Object Relational Mapping (Mapeo: establecer una relación lógica considerando puntos de referencia)**. 

Permite trabajar con bases de datos usando **objetos en lugar de
escribir SQL directamente**.

Ejemplo:

Sin ORM:
```sql
INSERT INTO users(name,email) VALUES('Ana','ana@email.com')

Con ORM:

User.create({ name:"Ana", email:"ana@email.com" })
```
------------------------------------------------------------------------

# 3. Instalación del proyecto
```
npm init -y

npm install express sequelize pg pg-hstore
```
------------------------------------------------------------------------

# 4. Estructura del proyecto
```
sequelize-demo

config/ database.js

models/ User.js Product.js

app.js
```
------------------------------------------------------------------------

# 5. Configuración de Sequelize

Archivo: config/database.js
```js
const { Sequelize } = require("sequelize")

const sequelize = new Sequelize( "demo_db", "postgres", "postgres", {
host: "localhost", dialect: "postgres" } )

module.exports = sequelize
```
------------------------------------------------------------------------

# 6. Probar conexión
```js
async function conectarDB(){

try{

    await sequelize.authenticate()

    console.log("Conexion exitosa")

}catch(error){

    console.error("Error de conexion:",error)

}

}
```
------------------------------------------------------------------------

# 7. Modelo User

```js
const { DataTypes } = require("sequelize") const sequelize =
require("../config/database")

const User = sequelize.define("User",{

name:{ type:DataTypes.STRING, allowNull:false },

email:{ type:DataTypes.STRING, allowNull:false }

})

module.exports = User
```
------------------------------------------------------------------------

# 8. Modelo Product
```js
const { DataTypes } = require("sequelize") const sequelize =
require("../config/database")

const Product = sequelize.define("Product",{

name:{ type:DataTypes.STRING },

price:{ type:DataTypes.INTEGER }

})

module.exports = Product
```
------------------------------------------------------------------------

# 9. Sincronizar tablas
```js
async function sincronizarDB(){

try{

    await sequelize.sync()

    console.log("Tablas sincronizadas")

}catch(error){

    console.error(error)

}

}
```
------------------------------------------------------------------------

# 10. Crear usuario
```js
async function crearUsuario(){

const user = await User.create({ name:"Ana", email:"ana@email.com" })

console.log(user.toJSON())

}
```
------------------------------------------------------------------------

# 11. Crear producto
```js
async function crearProducto(){

const product = await Product.create({ name:"Laptop", price:1200 })

console.log(product.toJSON())

}
```
------------------------------------------------------------------------

# 12. Obtener usuarios
```js
async function obtenerUsuarios(){

const users = await User.findAll()

console.table(users.map(u =\> u.toJSON()))

}
```
------------------------------------------------------------------------

# 13. Obtener productos
```js
async function obtenerProductos(){

const products = await Product.findAll()

console.table(products.map(p =\> p.toJSON()))

}
```
------------------------------------------------------------------------

# 14. Ejecutar todo

async function main(){

await conectarDB() 
await sincronizarDB() 
await crearUsuario() 
awaitcrearProducto() 
await obtenerUsuarios() 
await obtenerProductos()

}

main()

------------------------------------------------------------------------

Próxima clase: CRUD completo con Sequelize.
