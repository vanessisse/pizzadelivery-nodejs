const mongoose = require('mongoose');

const PedidoSchema = new mongoose.Schema({
  produtos: [
    {
      _id:{type: mongoose.Schema.Types.ObjectId,ref:'produtos', required: true},
      quantidade: { type: Number, required: true}
    },
  ],
  createdAt: { type: Date, required: true, default: Date.now() },
  precoTotal: { type: Number, required: true },
  precoEntrega: { type: Number, required: true },
  userId: {type: mongoose.Schema.Types.ObjectId,ref:'usuarios'},
  concluido: { type: Boolean, required: true }
});

const Pedido = mongoose.model('pedidos', PedidoSchema);

module.exports = Pedido;