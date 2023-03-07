"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecadosController = void 0;
const recados_repository_1 = require("../../repositories/recados/recados.repository");
class RecadosController {
    async create(req, res) {
        const { idUsuario, titulo, descricao, data } = req.body;
        const repositorio = new recados_repository_1.RecadosRepository();
        const resposta = await repositorio.addRecado(idUsuario, titulo, descricao, data);
        if (!resposta) {
            return res.status(400).send({
                sucesso: false,
                mensagem: 'Requisição invalida',
                dados: null,
            });
        }
        const recados = await repositorio.recadosAtivos(idUsuario);
        return res.status(201).send({
            sucesso: true,
            mensagem: 'Recado cadastrado com sucesso!',
            dados: recados,
        });
    }
    async getRecadosAtivos(req, res) {
        const { idUsuario } = req.params;
        const repositorio = new recados_repository_1.RecadosRepository();
        const recados = await repositorio.recadosAtivos(idUsuario);
        if (!recados) {
            return res.status(404).send({
                sucesso: false,
                mensagem: 'Não há recados ativos',
                dados: null,
            });
        }
        return res.status(302).send({
            sucesso: true,
            mensagem: 'Recados encontrados',
            dados: recados,
        });
    }
    async getRecadosArquivados(req, res) {
        const { idUsuario } = req.params;
        const { arquivado } = req.query;
        if (arquivado === 'false') {
            return res.status(400).send({
                sucesso: false,
                mensagem: 'Requisição inválida',
                dados: null,
            });
        }
        if (arquivado === 'true') {
            const repositorio = new recados_repository_1.RecadosRepository();
            const recados = await repositorio.recadosArquivados(idUsuario);
            if (!recados) {
                return res.status(404).send({
                    sucesso: false,
                    mensagem: 'Não há recados arquivados',
                    dados: null,
                });
            }
            return res.status(302).send({
                sucesso: true,
                mensagem: 'Recados encontrados',
                dados: recados,
            });
        }
        return res.status(400).send({
            sucesso: false,
            mensagem: 'Requisição inválida',
            dados: null,
        });
    }
    async getRecadosPorNome(req, res) {
        const { idUsuario } = req.params;
        const { titulo } = req.query;
        const tituloBusca = String(titulo);
        const repositorio = new recados_repository_1.RecadosRepository();
        const recados = await repositorio.recadosPorNome(idUsuario, tituloBusca);
        if (!recados) {
            return res.status(404).send({
                sucesso: false,
                mensagem: 'Recados não existentes',
                dados: null,
            });
        }
        return res.status(302).send({
            sucesso: true,
            mensagem: 'Recados encontrados',
            dados: recados,
        });
    }
    async getRecadosArquivadosPorNome(req, res) {
        const { idUsuario } = req.params;
        const { titulo } = req.query;
        const tituloBusca = String(titulo);
        const repositorio = new recados_repository_1.RecadosRepository();
        const recados = await repositorio.recadosArquivadosPorNome(idUsuario, tituloBusca);
        if (!recados) {
            return res.status(404).send({
                sucesso: false,
                mensagem: 'Recados não existentes',
                dados: null,
            });
        }
        return res.status(302).send({
            sucesso: true,
            mensagem: 'Recados encontrados',
            dados: recados,
        });
    }
    async update(req, res) {
        const { idUsuario, idRecado, titulo, descricao, data, arquivado, deletado } = req.body;
        const repositorio = new recados_repository_1.RecadosRepository();
        const resposta = await repositorio.updateRecado(idUsuario, idRecado, titulo, descricao, data, deletado, arquivado);
        if (resposta === false) {
            return res.status(404).send({
                sucesso: false,
                mensagem: 'Usuário não encontrado',
                dados: null,
            });
        }
        if (resposta === null) {
            return res.status(404).send({
                sucesso: false,
                mensagem: 'Recado não existente',
                dados: null,
            });
        }
        return res.status(201).send({
            sucesso: true,
            mensagem: 'Recado editado com sucesso!',
            dados: resposta,
        });
    }
    async desarquiva(req, res) {
        const { idUsuario, idRecado, titulo, descricao, data, arquivado, deletado } = req.body;
        const repositorio = new recados_repository_1.RecadosRepository();
        const resposta = await repositorio.desarquivaRecado(idUsuario, idRecado, titulo, descricao, data, deletado, arquivado);
        if (resposta === false) {
            return res.status(404).send({
                sucesso: false,
                mensagem: 'Usuário não encontrado',
                dados: null,
            });
        }
        if (resposta === null) {
            return res.status(404).send({
                sucesso: false,
                mensagem: 'Recado não existente',
                dados: null,
            });
        }
        return res.status(201).send({
            sucesso: true,
            mensagem: 'Recado editado com sucesso!',
            dados: resposta,
        });
    }
}
exports.RecadosController = RecadosController;
//# sourceMappingURL=recados.controller.js.map