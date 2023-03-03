import "dotenv/config";
import { DataSourceOptions } from "typeorm";
import { RecadosEntity } from "./entities/recados.entity";
import { UsuariosEntity } from "./entities/usuarios.entity";
import { CreateTableUsuarios1677726188898 } from "./migrations/1677726188898-CreateTableUsuarios";
import { CreateTableRecados1677726194907 } from "./migrations/1677726194907-CreateTableRecados";


const config: DataSourceOptions = {
    type: "postgres",
    url: process.env.DATABASE_URL,
    synchronize: false,
    logging: false,
    entities: [UsuariosEntity, RecadosEntity],
    migrations: [CreateTableUsuarios1677726188898, CreateTableRecados1677726194907],
    // ssl: {
    //   rejectUnauthorized: false,
    // },
};

export default config;