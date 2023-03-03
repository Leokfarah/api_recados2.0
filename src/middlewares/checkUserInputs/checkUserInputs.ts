import { Request, Response, NextFunction } from 'express';
import { IResposta } from '../../interfaces/iResposta/iResposta';

export const checkUserInputs = (req: Request, res: Response, next: NextFunction) => {
    const { email, senha } = req.body;

    if (!email || !senha) {
        return res.status(402).send({
            sucesso: false,
            mensagem: 'Dados não enviados',
            dados: { email, senha },
        } as IResposta);
    };

    next();
};
