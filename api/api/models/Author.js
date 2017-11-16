/**
 * Author.js
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
    authorName : {
      type: 'string',
      defaultsTo: '',
      columnName : 'nombre_de_autor',
      unique : true
    }
  }
};

