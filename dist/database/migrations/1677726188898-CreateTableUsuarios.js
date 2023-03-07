"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableUsuarios1677726188898 = void 0;
const typeorm_1 = require("typeorm");
class CreateTableUsuarios1677726188898 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
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
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('usuarios', true, true, true);
    }
}
exports.CreateTableUsuarios1677726188898 = CreateTableUsuarios1677726188898;
//# sourceMappingURL=1677726188898-CreateTableUsuarios.js.map