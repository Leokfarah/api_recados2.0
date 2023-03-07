"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const recados_controller_1 = require("./controllers/recados/recados.controller");
const usuarios_controller_1 = require("./controllers/usuarios/usuarios.controller");
const checkUserInputs_1 = require("./middlewares/checkUserInputs/checkUserInputs");
exports.default = (app) => {
    //rota teste:
    app.get('/', (request, response) => response.send('API Funcionando ou será que não'));
    //USUÁRIOS:
    const usuarioController = new usuarios_controller_1.UsuariosController();
    //cadastro de usuário:
    app.post('/cadastro', [checkUserInputs_1.checkUserInputs], usuarioController.create);
    //Login de usuário:
    app.post('/usuario', [checkUserInputs_1.checkUserInputs], usuarioController.login);
    //RECADOS:
    const recadosController = new recados_controller_1.RecadosController();
    //criar novo recado:
    app.post('/novoRecado', recadosController.create);
    //get todos os recados ativos do usuário:
    app.get('/recados/ativos/:idUsuario', recadosController.getRecadosAtivos);
    //get todos os recados arquivados do usuário:
    app.get('/recados/:idUsuario/arquivado', recadosController.getRecadosArquivados);
    //buscar recados do usuário pelo titulo
    app.get('/recados/:idUsuario/buscar', recadosController.getRecadosPorNome);
    //buscar recados arquivados do usuário pelo titulo
    app.get('/recados/arquivados/:idUsuario/buscar', recadosController.getRecadosArquivadosPorNome);
    // editar recados, arquivar (variavel arquivado = false para true) e soft delete (variavel deletado)
    app.put('/editar', recadosController.update);
    //editar recado para desarquivar (troca da variavel arquivada = true para false)
    app.put('/editar/desarquivar', recadosController.desarquiva);
};
//# sourceMappingURL=routes.js.map