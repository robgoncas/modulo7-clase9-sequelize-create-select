const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize.js");

const mensaje = sequelize.define('mensajes',{
    //type: es el tipo de dato que tiene la columna
    //allowNull: es para indicar si la columna puede ser nula o no
    contenido:{ type:DataTypes.STRING , allowNull:false },
    fecha:{type: DataTypes.DATE, allowNull:false }
});

module.exports = mensaje;