import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class AddExamEntity1616582603553 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:"exam",
            columns:[
                {
                    name:"eid",
                    type:"uuid",
                    isPrimary:true
                },
                {
                    name:"ename",
                    type:"varchar",
                    length:"50"
                },
                {
                    name:"student",
                    type:"varchar",

                },
                {
                    name:"course",
                    type:"varchar"
                },
                {
                    name: 'date_time',
                    type: 'timestamp',
                    default: 'now()'
                  },

            ]
        }),true)

        await queryRunner.createForeignKey("exam", new TableForeignKey({
            columnNames: ["student"],
            referencedColumnNames: ["sid"],
            referencedTableName: "student",
            onDelete: "CASCADE"
        }));
        await queryRunner.createForeignKey("exam", new TableForeignKey({
            columnNames: ["course"],
            referencedColumnNames: ["cid"],
            referencedTableName: "courses",
            onDelete: "CASCADE"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        const table = await queryRunner.getTable("exam");
        const foreignKey1 = table.foreignKeys.find(fk => fk.columnNames.indexOf("student") !== -1);
        await queryRunner.dropForeignKey("exam", foreignKey1);
        const foreignKey2 = table.foreignKeys.find(fk => fk.columnNames.indexOf("course") !== -1);
        await queryRunner.dropForeignKey("exam", foreignKey2);
        await queryRunner.dropTable("exam");
    }


}
