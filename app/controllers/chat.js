module.exports.iniciaChat = function(application, req, res){
	/* Recebe apelido do formulario index */
	var dadosForm = req.body;

	/* >>>>>> Tratamento de erros  */
	req.assert('apelido','Apelido é obrigatório').notEmpty();
	req.assert('apelido','Apelido deve conter entre 3 e 15 caracteres').len(3, 15);

	var erros = req.validationErrors();

	if(erros){
		res.render("index", {validacao : erros});
		return;
	}
	/* <<<<<< Tratamento de erros  */

	/* emite uma mensagem ao servidor informando uma nova conn */
	application.get('io').emit(
		'msgParaCliente',
		{apelido: dadosForm.apelido, mensagem: ' Entrou no chat'}
	);

	/* renderiza pagina chat */
	res.render("chat", {dadosForm : dadosForm});
};
