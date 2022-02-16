import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateCompliments1644879014037 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "compliments",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "user_sender",
                        type: "uuid"
                    },
                    {
                        name: "user_receiver",
                        type: "uuid"
                    },
                    {
                        name: "tag_id",
                        type: "uuid"
                    },
                    {
                        name: "message",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKUserSenderCompliments", // Nome da foreign key(FK + TabelaReferenciada + TabelaQueRefencia)
                        referencedTableName: "users", // Tabela referenciada (da onde vem a foreing key)
                        referencedColumnNames: ["id"], // Campo referenciado (Foreign Key)
                        columnNames: ["user_sender"], // Coluna da tabela que faz a refêrencia (Compliments)
                        onDelete: "SET NULL", // Ação ao deletar o dado referenciado.
                        onUpdate: "SET NULL" // Ação ao atualizar o dado referenciado.
                    },
                    {
                        name: "FKUserReceiverCompliments",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["user_receiver"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                    {
                        name: "FKTagCompliments",
                        referencedTableName: "tags",
                        referencedColumnNames: ["id"],
                        columnNames: ["tag_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ]
            })
        );
        // ** OUTRO MÉTODO PARA CRIAR FOREIGN KEYS **
        // await queryRunner.createForeignKey(
        //     "compliments",
        //     new TableForeignKey({
        //         name: "FKUserSenderCompliments", 
        //         referencedTableName: "users", 
        //         referencedColumnNames: ["id"],
        //         columnNames: ["user_sender"],
        //         onDelete: "SET NULL",
        //         onUpdate: "SET NULL"
        //     })
        // );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("compliments")
    }

}
