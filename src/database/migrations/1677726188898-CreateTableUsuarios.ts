import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateTableUsuarios1677726188898 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'usuarios',
                columns: [
                    {
                        name: 'idUsuario',
                        type: 'varchar',
                        length: '36',
                        isPrimary: true,
                        isNullable: false,
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                        length: '50',
                        isNullable: false,
                    },
                    {
                        name: 'senha',
                        type: 'varchar',
                        length: '30',
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
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('usuarios', true, true, true)
    }

}
