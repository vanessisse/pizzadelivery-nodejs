const ObjectId = require('mongoose').Types.ObjectId;

const validaUsuario = (req, res, next) => {
    // Verificação individual de erros e tratamento
    if (!req.body.nome) {
        return res.status(400).send({ message: "O campo 'nome' deve ser preenchido" });
    }
    if (!req.body.email) {
        return res.status(400).send({ message: "O campo 'e-mail' deve ser preenchido" });
    }
    if (!req.body.senha) {
        return res.status(400).send({ message: "O campo 'senha' deve ser preenchido" });
    }
    if (!req.body.imagem) {
        return res.status(400).send({ message: "O campo 'imagem' deve ser preenchido" });
    }
    if (!req.body.admin == undefined) {
        return res.status(400).send({ message: "O campo 'admin' deve ser preenchido" });
    }
    return next();
}

const validaEndereco = (req, res, next) => {
    // Variável para acumulação de erros
    let erros = [];

    req.body.map((value, key) => {
        if (!value.rua) {
            erros.push(`'${key + 1} - rua'`)
        }
        if (!value.numero) {
            erros.push(`'${key + 1} - número'`)
        }
        if (!value.cep) {
            erros.push(`'${key + 1} - CEP'`)
        }
    });
    // Verificação de quantidade de erros e tratamento
    if (erros.length == 0) {
        return next();
    } else {
        if (erros.length > 1) {
            return res.status(400).send({ message: `Os campos ${erros} devem ser preenchidos.` });
        } else {
            return res.status(400).send({ message: `O campo ${erros} deve ser preenchido.` });
        }
    }
}

const validaProduto = (req, res, next) => {
    // Variável para acumulação de erros
    let erros = [];

    if (!req.body.nome) {
        erros.push('nome');
    }
    if (!req.body.descricao) {
        erros.push('nome');
    }
    if (!req.body.precoUnitario) {
        erros.push('precoUnitario');
    }
    if (!req.body.imagem) {
        erros.push('imagem');
    }
    if (!req.body.codigoBarra) {
        erros.push('codigoBarra');
    }
    // Verificação de quantidade de erros e tratamento
    if (erros.length == 0) {
        return next();
    } else {
        if (erros.length > 1) {
            return res.status(400).send({ message: `Os campos ${erros} devem ser preenchidos.` });
        } else {
            return res.status(400).send({ message: `O campo ${erros} deve ser preenchido.` });
        }
    }
}

const validaCategoria = (req, res, next) => {
    if (!req.body.nome) {
        return res.status(400).send({ message: "O campo 'nome' deve ser preenchido" });
    }
    return next();
}

const validaPedido = (req, res, next) => {
    // Variável para acumulação de erros
    let erros = [];

    if (!req.body.precoTotal) {
        erros.push('precoTotal');
    }
    if (!req.body.precoEntrega) {
        erros.push('precoEntrega');
    }
    if (req.body.concluido == undefined) {
        erros.push('concluido');
    }
    // Verificação de quantidade de erros e tratamento
    if (erros.length == 0) {
        return next();
    } else {
        if (erros.length > 1) {
            return res.status(400).send({ message: `Os campos ${erros} devem ser preenchidos.` });
        } else {
            return res.status(400).send({ message: `O campo ${erros} deve ser preenchido.` });
        }
    }
}

const validaCarrinho = (req, res, next) => {
    // Variável para acumulação de erros
    let erros = [];

    if (!req.body.precoTotal) {
        erros.push('precoTotal');
    }
    if (!req.body.precoEntrega) {
        erros.push('precoEntrega');
    }
    // Verificação de quantidade de erros e tratamento
    if (erros.length == 0) {
        return next();
    } else {
        if (erros.length > 1) {
            return res.status(400).send({ message: `Os campos ${erros} devem ser preenchidos.` });
        } else {
            return res.status(400).send({ message: `O campo ${erros} deve ser preenchido.` });
        }
    }
}

const validaIdParams = (req, res, next) => {
    if (ObjectId.isValid(req.params.id)) {
        return next();
    } else {
        return res.status(400).send({ message: 'O campo ID não corresponde ao padrão necessário.' });
    }
}

const valida_IdBody = (req, res, next) => {
    if (ObjectId.isValid(req.body._id)) {
        return next();
    } else {
        return res.status(400).send({ message: 'O campo ID não corresponde ao padrão necessário.' });
    }
}

const validaLogin = (req, res, next) => {
    // Variável para acumulação de erros
    let erros = [];

    if (!req.body.email) {
        erros.push('email');
    }
    if (!req.body.senha) {
        erros.push('senha');
    }
    // Verificação de quantidade de erros e tratamento
    if (erros.length == 0) {
        return next();
    } else {
        if (erros.length > 1) {
            return res.status(400).send({ message: `Os campos ${erros} devem ser preenchidos.` });
        } else {
            return res.status(400).send({ message: `O campo ${erros} deve ser preenchido.` });
        }
    }
}

const validaProdutosCarrinhoPedido = (req, res, next) => {
    // Variável para acumulação de erros
    let erros = [];

    req.body.produtos.map((value, key) => {
        if (!value._id) {
            erros.push(`'${key + 1} - _id'`)
        }
        if (!ObjectId.isValid(value._id)) {
            erros.push(`'${key + 1} - _id' - tipo inválido`)
        }
        if (!value.quantidade) {
            erros.push(`'${key + 1} - quantidade'`)
        }
    });
    // Verificação de quantidade de erros e tratamento
    if (erros.length == 0) {
        return next();
    } else {
        if (erros.length > 1) {
            return res.status(400).send({ message: `Os campos ${erros} devem ser preenchidos.` });
        } else {
            return res.status(400).send({ message: `O campo ${erros} deve ser preenchido.` });
        }
    }
}

module.exports = {
    validaUsuario,
    validaEndereco,
    validaProduto,
    validaCategoria,
    validaPedido,
    validaCarrinho,
    validaIdParams,
    valida_IdBody,
    validaLogin,
    validaProdutosCarrinhoPedido
}