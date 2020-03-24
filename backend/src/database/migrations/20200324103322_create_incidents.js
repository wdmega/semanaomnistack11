
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table){
        table.increments();

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        table.string('ong_id').notNullable();

        table.foreign('ong_id').references('id').inTable('ongs'); //Chave primaria para ter certeza de que o ID referenciado esteja cadastrado na table ongs
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
  
};
