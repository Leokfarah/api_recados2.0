"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosRepository = void 0;
const usuarios_entity_1 = require("../../database/entities/usuarios.entity");
class UsuariosRepository {
    async addUsuario(email, senha) {
        const checkExistEmail = await usuarios_entity_1.UsuariosEntity.findOne({ where: { email } });
        if (checkExistEmail) {
            return null;
        }
        const newUser = usuarios_entity_1.UsuariosEntity.create({ email, senha });
        const resposta = await newUser.save();
        return resposta;
    }
    async logarUsuario(email, senha) {
        const checkExistUser = await usuarios_entity_1.UsuariosEntity.findOne({ where: { email, senha } });
        if (!checkExistUser) {
            return null;
        }
        return checkExistUser;
    }
}
exports.UsuariosRepository = UsuariosRepository;
//# sourceMappingURL=usuarios.repository.js.map