"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProduct1606872120786 = void 0;
const typeorm_1 = require("typeorm");
class createProduct1606872120786 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'products',
            columns: [{
                    name: "id",
                    type: "integer",
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: "title",
                    type: "varchar",
                },
                {
                    name: "latitude",
                    type: "decimal",
                    scale: 10,
                    precision: 2,
                },
                {
                    name: "longitude",
                    type: "decimal",
                    scale: 10,
                    precision: 2,
                },
                {
                    name: "description",
                    type: "text",
                },
                {
                    name: "condition",
                    type: "text",
                },
                {
                    name: "available",
                    type: "boolean",
                },
                {
                    name: "user",
                    type: "text",
                },
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('products');
    }
}
exports.createProduct1606872120786 = createProduct1606872120786;
