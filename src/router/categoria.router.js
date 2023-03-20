const router = require('express').Router();
const authMiddleware = require('../middleware/auth.middleware');
const categoriaController = require('../controller/categoria.controller');
const { validaCategoria, validaIdParams } = require('../middleware/validacao.middleware');
const paginacao = require('../middleware/paginacao.middleware');


router.get('/findById/:id', authMiddleware, validaIdParams, categoriaController.findCategoriaByIdController);
router.get('/findAll', authMiddleware, paginacao, categoriaController.findAllCategoriaController);

router.post('/create', authMiddleware, validaCategoria, categoriaController.createCategoriaController);

router.put('/update/:id', authMiddleware, validaIdParams, validaCategoria, categoriaController.updateCategoriaController);

router.delete('/remove/:id', authMiddleware, validaIdParams, categoriaController.deleteCategoriaController);

module.exports = router;