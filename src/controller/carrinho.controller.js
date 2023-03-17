const carrinhoService = require('../service/carrinho.service');

const findCarrinhoByIdController = async (req, res) => {
    try {
        return res.status(200).send(await carrinhoService.findCarrinhoByIdService(req.params.id));
    } catch (err) {
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({ message: 'Erro! Tente novamente.' });
    }
};

const findAllCarrinhoController = async (req, res) => {
    try {
        return res.status(200).send(await carrinhoService.findAllCarrinhoService(req.query.limit, req.query.offset));
    } catch (err) {
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({ message: 'Erro! Tente novamente.' });
    }
};

const createCarrinhoController = async (req, res) => {
    try {
        const corpo = {
            ...req.body,
            userId: req.userId,
        }

        return res.status(201).send(await carrinhoService.createCarrinhoService(corpo));
    } catch (err) {
        console.log(`Erro: ${err.message}`)
        res.status(500).send({ message: 'Erro! Tente novamente.' });
    }
};

const updateCarrinhoController = async (req, res) => {
    try {
        return res.status(200).send(await carrinhoService.updateCarrinhoService(req.params.id, req.body));
    } catch (err) {
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({ message: 'Erro! Tente novamente.' });
    }
};

const deleteCarrinhoController = async (req, res) => {
    try {
        return res.status(200).send(await carrinhoService.deleteCarrinhoService(req.params.id));
    } catch (err) {
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({ message: 'Erro! Tente novamente.' });
    }
};


module.exports = {
    findCarrinhoByIdController,
    findAllCarrinhoController,
    createCarrinhoController,
    updateCarrinhoController,
    deleteCarrinhoController
}