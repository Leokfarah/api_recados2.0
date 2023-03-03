import { Express } from 'express';
import { RecadosController } from './controllers/recados/recados.controller';
import { UsuariosController } from './controllers/usuarios/usuarios.controller';
import { checkUserInputs } from './middlewares/checkUserInputs/checkUserInputs';

export default (app: Express) => {
    //rota teste:
    app.get('/', (request, response) => response.send('API Funcionando ou será que não'));


    //USUÁRIOS:
    const usuarioController = new UsuariosController();

    //cadastro de usuário:
    app.post('/cadastro', [checkUserInputs], usuarioController.create);

    //Login de usuário:
    app.post('/usuario', [checkUserInputs], usuarioController.login);


    //RECADOS:
    const recadosController = new RecadosController();

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

}