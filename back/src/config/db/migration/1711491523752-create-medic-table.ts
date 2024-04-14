import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateMedicTable1711491523752 implements MigrationInterface {
    name = 'CreateMedicTable1711491523752'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "medicos" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(255) NOT NULL, "email" character varying(255) NOT NULL, "password" character varying(255) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "score" integer NOT NULL DEFAULT '5', CONSTRAINT "UQ_c12f2495d17fc6428bb6dfdbad7" UNIQUE ("email"), CONSTRAINT "PK_f16d578e9fd6df731d5e8551725" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "medicos"`);
    }

}
