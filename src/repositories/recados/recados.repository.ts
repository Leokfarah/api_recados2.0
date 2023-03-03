import { Like, Not } from "typeorm";
import { RecadosEntity } from "../../database/entities/recados.entity";
import { UsuariosEntity } from "../../database/entities/usuarios.entity";

export class RecadosRepository {
    async addRecado(idUsuario: string, titulo: string, descricao: string, data: string): Promise<RecadosEntity | null | false> {
        const checkExistUser = await UsuariosEntity.findOne({ where: { idUsuario } });

        if (!checkExistUser) {
            return null;
        }

        const newRecado = RecadosEntity.create({ idUsuario, titulo, descricao, data });
        const resposta = await newRecado.save();

        return resposta;
    }

    async recadosAtivos(idUsuario: string): Promise<RecadosEntity[] | null | false> {
        const checkExistUser = await UsuariosEntity.findOne({ where: { idUsuario } });

        if (!checkExistUser) {
            return null;
        }

        const recados = await RecadosEntity.find({
            where: {
                idUsuario,
                arquivado: Not(true),
                deletado: Not(true),
            },
        });

        if (!recados || recados.length === 0) {
            return null;
        }

        return recados;
    }

    async recadosArquivados(idUsuario: string): Promise<RecadosEntity[] | null | false> {
        const checkExistUser = await UsuariosEntity.findOne({ where: { idUsuario } });

        if (!checkExistUser) {
            return null;
        }

        const recados = await RecadosEntity.find({
            where: {
                idUsuario,
                arquivado: Not(false),
                deletado: Not(true),
            },
        });

        if (!recados || recados.length === 0) {
            return null;
        }

        return recados;
    }

    async recadosPorNome(idUsuario: string, titulo: string): Promise<RecadosEntity[] | null | false> {
        const checkExistUser = await UsuariosEntity.findOne({ where: { idUsuario } });

        if (!checkExistUser) {
            return null;
        }

        const recados = await RecadosEntity.find({
            where: {
                idUsuario,
                titulo: Like(`%${titulo}%`),
                arquivado: Not(true),
                deletado: Not(true),
            },
        });

        if (!recados || recados.length === 0) {
            return null;
        }

        return recados;
    }

    async recadosArquivadosPorNome(idUsuario: string, titulo: string): Promise<RecadosEntity[] | null | false> {
        const checkExistUser = await UsuariosEntity.findOne({ where: { idUsuario } });

        if (!checkExistUser) {
            return null;
        }

        const recados = await RecadosEntity.find({
            where: {
                idUsuario,
                titulo: Like(`%${titulo}%`),
                arquivado: Not(false),
                deletado: Not(true),
            },
        });

        if (!recados || recados.length === 0) {
            return null;
        }

        return recados;
    }



}