import { Request, Response } from "express";
import { IResposta } from "../../interfaces/iResposta/iResposta";
import { RecadosRepository } from "../../repositories/recados/recados.repository";

export class RecadosController {
    async create(req: Request, res: Response) {
        const { idUsuario, titulo, descricao, data } = req.body;

        const repositorio = new RecadosRepository();
        const resposta = await repositorio.addRecado(idUsuario, titulo, descricao, data);

        if (!resposta) {
            return res.status(400).send({
                sucesso: false,
                mensagem: 'Requisição invalida',
                dados: null,
            } as IResposta);
        }

        const recados = await repositorio.recadosAtivos(idUsuario);

        return res.status(201).send({
            sucesso: true,
            mensagem: 'Recado cadastrado com sucesso!',
            dados: recados,
        } as IResposta);
    }

    async getRecadosAtivos(req: Request, res: Response) {
        const { idUsuario } = req.params;

        const repositorio = new RecadosRepository();
        const recados = await repositorio.recadosAtivos(idUsuario);

        if (!recados) {
            return res.status(404).send({
                sucesso: false,
                mensagem: 'Não há recados ativos',
                dados: null,
            } as IResposta);
        }

        return res.status(302).send({
            sucesso: true,
            mensagem: 'Recados encontrados',
            dados: recados,
        } as IResposta);
    }

    async getRecadosArquivados(req: Request, res: Response) {
        const { idUsuario } = req.params;
        const { arquivado } = req.query;

        if (arquivado === 'false') {
            return res.status(400).send({
                sucesso: false,
                mensagem: 'Requisição inválida',
                dados: null,
            } as IResposta);
        }

        if (arquivado === 'true') {
            const repositorio = new RecadosRepository();
            const recados = await repositorio.recadosArquivados(idUsuario);

            if (!recados) {
                return res.status(404).send({
                    sucesso: false,
                    mensagem: 'Não há recados arquivados',
                    dados: null,
                } as IResposta);
            }

            return res.status(302).send({
                sucesso: true,
                mensagem: 'Recados encontrados',
                dados: recados,
            } as IResposta);
        }

        return res.status(400).send({
            sucesso: false,
            mensagem: 'Requisição inválida',
            dados: null,
        } as IResposta);
    }

    async getRecadosPorNome(req: Request, res: Response) {
        const { idUsuario } = req.params;
        const { titulo } = req.query;
        const tituloBusca = String(titulo);

        const repositorio = new RecadosRepository();
        const recados = await repositorio.recadosPorNome(idUsuario, tituloBusca);

        if (!recados) {
            return res.status(404).send({
                sucesso: false,
                mensagem: 'Recados não existentes',
                dados: null,
            } as IResposta);
        }

        return res.status(302).send({
            sucesso: true,
            mensagem: 'Recados encontrados',
            dados: recados,
        } as IResposta);
    }

    async getRecadosArquivadosPorNome(req: Request, res: Response) {
        const { idUsuario } = req.params;
        const { titulo } = req.query;
        const tituloBusca = String(titulo);

        const repositorio = new RecadosRepository();
        const recados = await repositorio.recadosArquivadosPorNome(idUsuario, tituloBusca);

        console.log('resposta: ', recados);

        if (!recados) {
            return res.status(404).send({
                sucesso: false,
                mensagem: 'Recados não existentes',
                dados: null,
            } as IResposta);
        }

        return res.status(302).send({
            sucesso: true,
            mensagem: 'Recados encontrados',
            dados: recados,
        } as IResposta);
    }


}
