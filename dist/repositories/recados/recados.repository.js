"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecadosRepository = void 0;
const typeorm_1 = require("typeorm");
const recados_entity_1 = require("../../database/entities/recados.entity");
const usuarios_entity_1 = require("../../database/entities/usuarios.entity");
class RecadosRepository {
    async addRecado(idUsuario, titulo, descricao, data) {
        const checkExistUser = await usuarios_entity_1.UsuariosEntity.findOne({ where: { idUsuario } });
        if (!checkExistUser) {
            return null;
        }
        const newRecado = recados_entity_1.RecadosEntity.create({ idUsuario, titulo, descricao, data });
        const resposta = await newRecado.save();
        return resposta;
    }
    async recadosAtivos(idUsuario) {
        const checkExistUser = await usuarios_entity_1.UsuariosEntity.findOne({ where: { idUsuario } });
        if (!checkExistUser) {
            return null;
        }
        const recados = await recados_entity_1.RecadosEntity.find({
            where: {
                idUsuario,
                arquivado: (0, typeorm_1.Not)(true),
                deletado: (0, typeorm_1.Not)(true),
            },
        });
        if (!recados) {
            return null;
        }
        return recados;
    }
    async recadosArquivados(idUsuario) {
        const checkExistUser = await usuarios_entity_1.UsuariosEntity.findOne({ where: { idUsuario } });
        if (!checkExistUser) {
            return null;
        }
        const recados = await recados_entity_1.RecadosEntity.find({
            where: {
                idUsuario,
                arquivado: (0, typeorm_1.Not)(false),
                deletado: (0, typeorm_1.Not)(true),
            },
        });
        if (!recados) {
            return null;
        }
        return recados;
    }
    async recadosPorNome(idUsuario, titulo) {
        const checkExistUser = await usuarios_entity_1.UsuariosEntity.findOne({ where: { idUsuario } });
        if (!checkExistUser) {
            return null;
        }
        const recados = await recados_entity_1.RecadosEntity.find({
            where: {
                idUsuario,
                titulo: (0, typeorm_1.Like)(`%${titulo}%`),
                arquivado: (0, typeorm_1.Not)(true),
                deletado: (0, typeorm_1.Not)(true),
            },
        });
        if (!recados) {
            return null;
        }
        return recados;
    }
    async recadosArquivadosPorNome(idUsuario, titulo) {
        const checkExistUser = await usuarios_entity_1.UsuariosEntity.findOne({ where: { idUsuario } });
        if (!checkExistUser) {
            return null;
        }
        const recados = await recados_entity_1.RecadosEntity.find({
            where: {
                idUsuario,
                titulo: (0, typeorm_1.Like)(`%${titulo}%`),
                arquivado: (0, typeorm_1.Not)(false),
                deletado: (0, typeorm_1.Not)(true),
            },
        });
        if (!recados || recados.length === 0) {
            return null;
        }
        return recados;
    }
    async updateRecado(idUsuario, idRecado, titulo, descricao, data, deletado, arquivado) {
        const checkExistUser = await recados_entity_1.RecadosEntity.findOne({ where: { idUsuario } });
        if (!checkExistUser) {
            return false;
        }
        const linhaParaEditar = await recados_entity_1.RecadosEntity.findOne({ where: { idRecado } });
        if (linhaParaEditar) {
            linhaParaEditar.titulo = titulo;
            linhaParaEditar.descricao = descricao;
            linhaParaEditar.data = data;
            linhaParaEditar.deletado = deletado;
            linhaParaEditar.arquivado = arquivado;
            linhaParaEditar.dataAlteracao = new Date();
            await recados_entity_1.RecadosEntity.update(linhaParaEditar.idRecado, linhaParaEditar);
            const recados = await this.recadosAtivos(idUsuario);
            return recados;
        }
        return null;
    }
    async desarquivaRecado(idUsuario, idRecado, titulo, descricao, data, deletado, arquivado) {
        const checkExistUser = await recados_entity_1.RecadosEntity.findOne({ where: { idUsuario } });
        if (!checkExistUser) {
            return false;
        }
        const linhaParaEditar = await recados_entity_1.RecadosEntity.findOne({ where: { idRecado } });
        if (linhaParaEditar) {
            linhaParaEditar.titulo = titulo;
            linhaParaEditar.descricao = descricao;
            linhaParaEditar.data = data;
            linhaParaEditar.deletado = deletado;
            linhaParaEditar.arquivado = arquivado;
            linhaParaEditar.dataAlteracao = new Date();
            await recados_entity_1.RecadosEntity.update(linhaParaEditar.idRecado, linhaParaEditar);
            const recados = await this.recadosArquivados(idUsuario);
            return recados;
        }
        return null;
    }
}
exports.RecadosRepository = RecadosRepository;
//# sourceMappingURL=recados.repository.js.map