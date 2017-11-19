/**
 * Documents.js
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
    idPackage : {
      type: 'integer',
      defaultsTo : '',
      columnName : 'id_paquete',
      model : 'Package'
    },
    approved : {
      type: 'boolean',
      defaultsTo: false,
      columnName : 'aprovado'
    },
    size : {
      type: 'integer',
      defaultsTo: 0,
      columnName : 'tamano'
    },
    documentType : {
      type: 'string',
      defaultsTo: '',
      columnName : 'tipo_de_documento'
    },
    route : {
      type: 'boolean',
      defaultsTo: '',
      columnName : 'ubicacion'
    },
    reference : {
      type: 'string',
      defaultsTo: '',
      columnName : 'referencia'
    },
    title : {
      type: 'string',
      defaultsTo: '',
      columnName : 'titulo',
      unique : true
    },
    author : {
      type: 'string',
      defaultsTo: '',
      columnName : 'autor',
      model:'Author'
    },
    reasonToReject : {
      type: 'string',
      defaultsTo: '',
      columnName : 'razon_de_rechazo'
    }
  }
};

