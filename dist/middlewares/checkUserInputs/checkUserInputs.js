"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkUserInputs = void 0;
const checkUserInputs = (req, res, next) => {
    const { email, senha } = req.body;
    if (!email || !senha) {
        return res.status(402).send({
            sucesso: false,
            mensagem: 'Dados não enviados',
            dados: null,
        });
    }
    ;
    next();
};
exports.checkUserInputs = checkUserInputs;
//# sourceMappingURL=checkUserInputs.js.map