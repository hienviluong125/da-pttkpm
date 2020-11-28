"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMigration1606576397267 = void 0;
const typeorm_1 = require("typeorm");
class UserMigration1606576397267 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
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
        }), true);
    }
    async down(queryRunner) {
        await queryRunner.dropTable("user");
    }
}
exports.UserMigration1606576397267 = UserMigration1606576397267;
//# sourceMappingURL=1606576397267-UserMigration.js.map