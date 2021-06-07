"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createImages1602811740292 = void 0;
const typeorm_1 = require("typeorm");
class createImages1602811740292 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'images',
            columns: [{
                    name: "id",
                    type: "integer",
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                },
                {
                    name: 'path',
                    type: 'varchar',
                },
                {
                    name: 'product_id',
                    type: 'integer',
                }
            ],
            foreignKeys: [
                {
                    name: 'ImageProduct',
                    columnNames: ['product_id'],
                    referencedTableName: 'products',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE',
                }
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('images');
    }
}
exports.createImages1602811740292 = createImages1602811740292;
