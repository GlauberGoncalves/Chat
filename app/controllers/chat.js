module.exports.iniciaChat = function(application, req , res){
  var dadosForm = req.body;

  /* >>>>>>> Validação do formulario */

  /* Verifica se apelido está vazio */
  req.assert('apelido', 'Apelido é obrigatório').notEmpty();
  /* Verifica se apelido tem de 3 a 15 caracteres */
  req.assert('apelido', 'Apelido é deve conter entre 3 a 15 caracteres').len(3,15);
  /* popula a variavel erros com os erros validados */
  var erros = req.validationErrors();
  /* se houver erros, redireciona fluxo para pagina inicial */
  if(erros){
    /* envia erros identificados para a pagina inicial */
    res.render('index', {validacao : erros});
    return;
  }

  /* <<<<<<<< Validação do formulario */

  res.render("chat");
}
