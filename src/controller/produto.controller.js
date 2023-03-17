const produtoService = require('../service/produto.service');

const findProductByIdController = async (req, res) => {
    try {
        return res.send(await produtoService.findProductByIdService(req.params.id));
    } catch (err) {
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({ message: 'Erro! Tente novamente.' });
    }
};

const findAllProductController = async (req, res) => {
    try {
        return res.send(await produtoService.findAllProductService(req.query.limit, req.query.offset));
    } catch (err) {
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({ message: 'Erro! Tente novamente.' });
    }
};

const createProductController = async (req, res) => {
    try {
        const corpo = {
            ...req.body,
            userId: req.userId
        }

        return res.status(201).send(await produtoService.createProductService(corpo));
    } catch (err) {
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({ message: 'Erro! Tente novamente.' });
    }
};

const updateProductController = async (req, res) => {
    try {
        return res.send(await produtoService.updateProductService(req.params.id, req.body));
    } catch (err) {
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({ message: 'Erro! Tente novamente.' });
    }
};

const deleteProductController = async (req, res) => {
    try {
        return res.send(await produtoService.deleteProductService(req.params.id));
    } catch (err) {
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({ message: 'Erro! Tente novamente.' });
    }
};

const addCategoriaProdutoController = async (req, res) => {
    try {
        return res.status(200).send(await produtoService.addCategoriaProdutoService(req.params.id, req.body));
    } catch (err) {
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({ message: 'Erro! Tente novamente.' });
    }
};

const removeCategoriaProdutoController = async (req, res) => {
    try {
        return res.status(200).send(await produtoService.removeCategoriaProdutoService(req.params.id, req.body));
    } catch (err) {
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({ message: 'Erro! Tente novamente.' });
    }
};

module.exports = {
    findProductByIdController,
    findAllProductController,
    createProductController,
    updateProductController,
    deleteProductController,
    addCategoriaProdutoController,
    removeCategoriaProdutoController
}