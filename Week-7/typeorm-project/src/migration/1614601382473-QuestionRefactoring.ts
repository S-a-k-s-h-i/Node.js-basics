import {MigrationInterface, QueryRunner} from "typeorm";

export class QuestionRefactoring1614601382473 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.renameColumn("question","title","name");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.renameColumn("question","name","title");
    }

}
