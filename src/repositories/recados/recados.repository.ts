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

        if (!recados) {
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

        if (!recados) {
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

        if (!recados) {
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

    async updateRecado(idUsuario: string, idRecado: string, titulo: string, descricao: string, data: string, deletado: boolean, arquivado: boolean): Promise<RecadosEntity[] | null | false> {
        const checkExistUser = await RecadosEntity.findOne({ where: { idUsuario } });

        if (!checkExistUser) {
            return false;
        }

        const linhaParaEditar = await RecadosEntity.findOne({ where: { idRecado } });

        if (linhaParaEditar) {
            linhaParaEditar.titulo = titulo;
            linhaParaEditar.descricao = descricao;
            linhaParaEditar.data = data;
            linhaParaEditar.deletado = deletado;
            linhaParaEditar.arquivado = arquivado;
            linhaParaEditar.dataAlteracao = new Date();

            await RecadosEntity.update(linhaParaEditar.idRecado, linhaParaEditar);

            const recados = await this.recadosAtivos(idUsuario);

            return recados;
        }

        return null;
    }

    async desarquivaRecado(idUsuario: string, idRecado: string, titulo: string, descricao: string, data: string, deletado: boolean, arquivado: boolean): Promise<RecadosEntity[] | null | false> {
        const checkExistUser = await RecadosEntity.findOne({ where: { idUsuario } });

        if (!checkExistUser) {
            return false;
        }

        const linhaParaEditar = await RecadosEntity.findOne({ where: { idRecado } });

        if (linhaParaEditar) {
            linhaParaEditar.titulo = titulo;
            linhaParaEditar.descricao = descricao;
            linhaParaEditar.data = data;
            linhaParaEditar.deletado = deletado;
            linhaParaEditar.arquivado = arquivado;
            linhaParaEditar.dataAlteracao = new Date();

            await RecadosEntity.update(linhaParaEditar.idRecado, linhaParaEditar);

            const recados = await this.recadosArquivados(idUsuario);

            return recados;
        }

        return null;
    }
}