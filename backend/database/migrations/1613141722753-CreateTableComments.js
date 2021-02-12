
const Table= require("typeorm").Table

class CreateTableComments1613141722753 {

    async up(queryRunner) {
        await queryRunner.createTable(
            new Table({
                name: "Commentary",
                columns:[
                    {
                        name: "id",
                        type: "integer",
                        isPrimary: true,
                        generationStrategy: "increment",
                        isGenerated: true
                    },
                    {
                        name: "comentario",
                        type: "varchar"
                    },
                    {
                        name: "audio",
                        type: "varchar"
                    }
                ]
            })
        )
        
    }

    async down(queryRunner )  {
        await queryRunner.dropTable("Commentary");
    }

}
module.exports= CreateTableComments1613141722753