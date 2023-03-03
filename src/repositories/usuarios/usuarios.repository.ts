import { UsuariosEntity } from "../../database/entities/usuarios.entity";

export class UsuariosRepository {
    async addUsuario(email: string, senha: string): Promise<UsuariosEntity | null | false> {
        const checkExistEmail = await UsuariosEntity.findOne({ where: { email } });

        if (checkExistEmail) {
            return null;
        }

        const newUser = UsuariosEntity.create({ email, senha });
        const resposta = await newUser.save();
        return resposta;
    }

    async logarUsuario(email: string, senha: string): Promise<UsuariosEntity | null | false> {
        const checkExistUser = await UsuariosEntity.findOne({ where: { email, senha } });

        if (!checkExistUser) {
            return null;
        }

        return checkExistUser;
    }


}