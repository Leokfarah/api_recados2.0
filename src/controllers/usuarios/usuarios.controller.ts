import { Request, Response } from "express";
import { IResposta } from "../../interfaces/iResposta/iResposta";
import { UsuariosRepository } from "../../repositories/usuarios/usuarios.repository";

export class UsuariosController {
    async create(req: Request, res: Response) {
        const { email, senha } = req.body;

        const repositorio = new UsuariosRepository();
        const resposta = await repositorio.addUsuario(email, senha);

        if (!resposta) {
            return res.status(401).send({
                sucesso: false,
                mensagem: 'credenciais inválidas',
                dados: null,
            } as IResposta);
        }

        return res.status(201).send({
            sucesso: true,
            mensagem: 'Usuário cadastrado com sucesso!',
            dados: { 'cadastrado': resposta.idUsuario },
        } as IResposta);
    }

    async login(req: Request, res: Response) {
        const { email, senha } = req.body;

        const repositorio = new UsuariosRepository();
        const resposta = await repositorio.logarUsuario(email, senha);

        if (!resposta) {
            return res.status(401).send({
                sucesso: false,
                mensagem: 'credenciais inválidas',
                dados: null,
            } as IResposta);
        }

        return res.status(202).send({
            sucesso: true,
            mensagem: 'Login Autorizado',
            dados: resposta.idUsuario,
        } as IResposta);
    }

}