// Função middleware
module.exports = (req, res, next) => {

    // Desestruturação para extrair as propriedades limit e offset do objeto query
    let { limit, offset } = req.query;

    // Os valores de limit e offset extraídos são inicialmente do tipo String
    // Conversão desses valores em números
    limit = Number(limit);
    offset = Number(offset);

    // if/else de uma única linha
    // Verifica se as variáveis limit e offset estão definidas
    // Se limit não estiver definido, o padrão será 10; se estiver, ficará do jeito que está.
    // Se offset não estiver definido, o padrão será 0; se estiver, ficará do jeito que está.
    !limit ? limit = 10 : null;
    !offset ? offset = 0 : null;

    // Atualização do objeto query com os valores de limit e offset que foram convertidos e definidos anteriormente
    req.query.offset = offset;
    req.query.limit = limit;

    return next();
}