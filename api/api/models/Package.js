/**
 * Package.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
moment = require('moment');
module.exports = {

  attributes: {
    id: {
      type: 'integer',
      autoIncrement: true,
      unique: true,
      primaryKey: true,
      columnName : 'id'
    },
    idUser : {
      type: 'integer',
      defaultsTo: '',
      columnName : 'id_usuario',
      model : 'User'
    },
    description : {
      type: 'string',
      defaultsTo: '',
      columnName : "descripcion"
    },
    abstract : {
      type: 'string',
      defaultsTo: '',
      columnName: 'abstract'
    },
    title : {
      type: 'string',
      defaultsTo: '',
      columnName: 'titulo'
    },
    label : {
      type : "string",
      defaultsTo : '',
      columnName : 'label'
    }
  }
};

