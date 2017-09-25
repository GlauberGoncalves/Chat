module.exports = function(application){
  application.get('/', function(request, response){
    response.send("<p>Projeto chat com NodeJS.</p>");
  });
};
