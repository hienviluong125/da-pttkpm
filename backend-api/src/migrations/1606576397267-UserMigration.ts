import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class UserMigration1606576397267 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: "user",
      columns: [
          {
              name: "id",
              type: "int",
              isPrimary: true,
              isGenerated: true,
              generationStrategy: 'increment',
          },
          {
              name: "email",
              type: "varchar",
          },
          {
            name: "username",
            type: "varchar",
          },
          {
            name: "role",
            type: "varchar",
          },
          {
            name: "password",
            type: "varchar",
        }
      ]
    }), true)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("user");
  }

}
