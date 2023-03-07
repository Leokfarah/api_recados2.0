"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosController = void 0;
const usuarios_repository_1 = require("../../repositories/usuarios/usuarios.repository");
class UsuariosController {
    async create(req, res) {
        const { email, senha } = req.body;
        const repositorio = new usuarios_repository_1.UsuariosRepository();
        const resposta = await repositorio.addUsuario(email, senha);
        if (!resposta) {
            return res.status(401).send({
                sucesso: false,
                mensagem: 'credenciais inválidas',
                dados: null,
            });
        }
        return res.status(201).send({
            sucesso: true,
            mensagem: 'Usuário cadastrado com sucesso!',
            dados: { 'cadastrado': resposta.idUsuario },
        });
    }
    async login(req, res) {
        const { email, senha } = req.body;
        const repositorio = new usuarios_repository_1.UsuariosRepository();
        const resposta = await repositorio.logarUsuario(email, senha);
        if (!resposta) {
            return res.status(401).send({
                sucesso: false,
                mensagem: 'credenciais inválidas',
                dados: null,
            });
        }
        return res.status(202).send({
            sucesso: true,
            mensagem: 'Login Autorizado',
            dados: resposta.idUsuario,
        });
    }
}
exports.UsuariosController = UsuariosController;
//# sourceMappingURL=usuarios.controller.js.map