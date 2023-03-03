import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateTableRecados1677726194907 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'recados',
                columns: [
                    {
                        name: 'idRecado',
                        type: 'varchar',
                        length: '36',
                        isPrimary: true,
                        isNullable: false,
                    },
                    {
                        name: 'idUsuario',
                        type: 'varchar',
                        length: '36',
                        isNullable: false,
                    },
                    {
                        name: 'titulo',
                        type: 'varchar',
                        length: '50',
                        isNullable: false,
                    },
                    {
                        name: 'descricao',
                        type: 'varchar',
                        length: '100',
                        isNullable: false,
                    },
                    {
                        name: 'data',
                        type: 'varchar',
                        length: '15',
                        isNullable: false,
                    },
                    {
                        name: 'arquivado',
                        type: 'boolean',
                        default: false,
                        isNullable: false,
                    },
                    {
                        name: 'deletado',
                        type: 'boolean',
                        default: false,
                        isNullable: false,
                    },
                    {
                        name: 'dataCriacao',
                        type: 'timestamp',
                        default: 'now()',
                        isNullable: false
                    },
                    {
                        name: 'dataAlteracao',
                        type: 'timestamp',
                        isNullable: true
                    }
                ],
                foreignKeys: [
                    {
                        name: 'fk_recado_idUsuario',
                        columnNames: ['idUsuario'],
                        referencedTableName: 'usuarios',
                        referencedColumnNames: ['idUsuario'],
                        onDelete: 'CASCADE'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('recados', true, true, true)
    }

}
