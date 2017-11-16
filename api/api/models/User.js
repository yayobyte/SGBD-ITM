/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: {
      type: 'integer',
      autoIncrement: true,
      unique: true,
      primaryKey: true,
      columnName : 'id'
    },
    name : {
      type: 'string',
      defaultsTo: '',
      columnName : 'nombre'
    },
    lastName : {
      type: 'string',
      defaultsTo: '',
      columnName : 'apellido'
    },
    password : {
      type: 'string',
      defaultsTo: '',
      columnName : 'contrasena',
      required : true
    },
    status : {
      type: 'boolean',
      defaultsTo: '',
      columnName : 'estado'
    },
    userType : {
      type: 'string',
      defaultsTo: '',
      columnName : 'tipo_de_usuario'
    },
    userName : {
      type: 'string',
      defaultsTo: '',
      columnName : 'nombre_de_usuario',
      required : true,
      unique : true
    },
    email : {
      type: 'string',
      defaultsTo: '',
      columnName : 'correo',
      unique : true
    }
  }
};

