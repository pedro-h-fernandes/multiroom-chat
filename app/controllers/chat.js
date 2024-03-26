module.exports.iniciaChat = (application, req, res) => {
  const dadosForm = req.body;
  req.assert("apelido", "Nome ou apelido é obrigatório").notEmpty();
  req.assert("apelido", "Nome ou apelido deve conter entre 3 e 15 caracteres").len(3, 15);

  const erros = req.validationErrors(); // Retorna um array de erros, caso haja

  if (erros) {
    res.render("index", { validacao: erros });
    return;
  }
  res.render("chat");
};
