"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const recados_entity_1 = require("./entities/recados.entity");
const usuarios_entity_1 = require("./entities/usuarios.entity");
const _1677726188898_CreateTableUsuarios_1 = require("./migrations/1677726188898-CreateTableUsuarios");
const _1677726194907_CreateTableRecados_1 = require("./migrations/1677726194907-CreateTableRecados");
const config = {
    type: "postgres",
    url: process.env.DATABASE_URL,
    synchronize: false,
    logging: false,
    entities: [usuarios_entity_1.UsuariosEntity, recados_entity_1.RecadosEntity],
    migrations: [_1677726188898_CreateTableUsuarios_1.CreateTableUsuarios1677726188898, _1677726194907_CreateTableRecados_1.CreateTableRecados1677726194907],
    // ssl: {
    //   rejectUnauthorized: false,
    // },
};
exports.default = config;
//# sourceMappingURL=ormconfig.js.map