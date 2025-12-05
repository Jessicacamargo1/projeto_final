import { MigrationInterface, QueryRunner } from "typeorm";

export class CriarTabelas1764967472029 implements MigrationInterface {
    name = 'CriarTabelas1764967472029'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`course\` (\`id\` int NOT NULL AUTO_INCREMENT, \`description\` varchar(255) NOT NULL, \`price\` decimal(10,2) NOT NULL, \`name\` varchar(255) NOT NULL, \`active\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`collaborator\` (\`id\` int NOT NULL AUTO_INCREMENT, \`email\` varchar(255) NOT NULL, \`idade\` decimal(10,2) NOT NULL, \`nome\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`enrollment\` (\`id\` int NOT NULL AUTO_INCREMENT, \`course_id\` int NULL, \`collaborator_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`enrollment\` ADD CONSTRAINT \`FK_dd1ce01d1164c8bbdda052ced74\` FOREIGN KEY (\`course_id\`) REFERENCES \`course\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`enrollment\` ADD CONSTRAINT \`FK_91760a547cc01f0d86d33b898b2\` FOREIGN KEY (\`collaborator_id\`) REFERENCES \`collaborator\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`enrollment\` DROP FOREIGN KEY \`FK_91760a547cc01f0d86d33b898b2\``);
        await queryRunner.query(`ALTER TABLE \`enrollment\` DROP FOREIGN KEY \`FK_dd1ce01d1164c8bbdda052ced74\``);
        await queryRunner.query(`DROP TABLE \`enrollment\``);
        await queryRunner.query(`DROP TABLE \`collaborator\``);
        await queryRunner.query(`DROP TABLE \`course\``);
    }

}
