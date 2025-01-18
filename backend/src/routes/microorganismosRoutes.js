// Importa o módulo `express`, que é o framework usado para criar servidores e rotas HTTP.
const express = require('express');

// Importa a função `createMicroorganismo` do arquivo de controlador localizado no diretório `controllers`.
// Essa função é responsável por lidar com a lógica de criação de um microorganismo.
const { createMicroorganismo } = require('../controllers/microorganismosController');

// Cria uma nova instância de um roteador do Express, que será usada para definir as rotas específicas deste recurso.
const router = express.Router();

// Define uma rota HTTP do tipo POST na raiz (`/`) deste roteador.
// Quando essa rota é acessada, ela chama a função `createMicroorganismo` para processar a requisição.
router.post('/', createMicroorganismo);

// Exporta o roteador para que ele possa ser usado em outros arquivos (como no `app.js`).
module.exports = router;