const EntitySchema = require("typeorm").EntitySchema;

class Commentary {
    id;
    comentario;
    audio;
}

module.exports = new EntitySchema({
    name: 'Commentary',
    target: Commentary,
    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true
        },
        comentario: {
            type: 'varchar'
        },
        audio: {
            type: 'text'
        }
    }
});