// Importa o módulo `express`, que é o framework usado para criar servidores e rotas HTTP.
const express = require('express');

// Importa a função `createMicroorganismo` do arquivo de controlador localizado no diretório `controllers`.
const { createResultado, getResultado, updateResultado, getResultadosGrafico } = require('../controllers/resultadosController');

// Cria uma nova instância de um roteador do Express, que será usada para definir as rotas específicas deste recurso.
const router = express.Router();

// Define uma rota HTTP do tipo POST na raiz (`/`) deste roteador.
router.post('/', createResultado);
router.get('/', getResultado);
router.put('/:id', updateResultado);
router.post('/grafico', getResultadosGrafico); 



// Exporta o roteador para que ele possa ser usado em outros arquivos (como no `app.js`).
module.exports = router;
