import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createImages1602811740292 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:'images',
            columns:[{
                name:"id",
                type:"integer",
                unsigned:true,
                isPrimary:true,
                isGenerated:true,
            },
            {
                name:'path',
                type:'varchar',
            },
            {
                name:'product_id',
                type:'integer',
            }
        ],
        foreignKeys:[
            {
                name:'ImageProduct',
                columnNames:['product_id'],
                referencedTableName:'products',
                referencedColumnNames:['id'],
                onUpdate:'CASCADE',
                onDelete:'CASCADE',
            }
        ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('images');
    }

}
