const mongoose = require('mongoose');

const ProdutoSchema = new mongoose.Schema({
    nome: { type: String, unique: true, required: true },
    descricao: { type: String, equired: true },
    ingredientes: [{ type: String, required: true }],
    tamanho: { type: String, required: true },
    precoUnitario: { type: Number, required: true },
    disponivel: { type: Boolean, required: true, default: true },
    imagem: { type: String, required: true },
    dataCriacao: { type: Date, default: Date.now() },
    codigoBarra: { type: Number, unique: true, required: true },
    categorias: [
        {
            _id: { type: mongoose.Schema.Types.ObjectId, unique: true, required: true, ref: 'categorias' },
            createdAt: { type: Date, required: true, default: Date.now() }
        },
    ]
});

const Produto = mongoose.model('produtos', ProdutoSchema);

module.exports = Produto;