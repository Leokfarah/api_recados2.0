import { Request, Response, NextFunction } from 'express';
import { IResposta } from '../../interfaces/iResposta/iResposta';

export const checkRecadosInputs = (req: Request, res: Response, next: NextFunction) => {
    const { idUsuario, titulo, descricao, data } = req.body;

    if (!idUsuario || !titulo || !descricao || !data) {
        return res.status(402).send({
            sucesso: false,
            mensagem: 'Dados não enviados ou incompletos',
            dados: { titulo, descricao, data },
        } as IResposta);
    };

    next();
};
