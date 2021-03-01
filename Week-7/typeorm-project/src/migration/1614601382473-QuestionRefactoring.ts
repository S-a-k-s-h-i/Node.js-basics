import {MigrationInterface, QueryRunner} from "typeorm";

export class QuestionRefactoring1614601382473 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "question" ALTER COLUMN "title" RENAME TO "name"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "question" ALTER COLUMN "name" RENAME TO "title"`);
    }

}
