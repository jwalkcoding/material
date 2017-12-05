const  express  =  require('express');
const  graphqlHTTP  =  require('express-graphql'); 
const  app  =  express(); 

var ctlr = require('../controllers')
var settings = require('../settings');

var port = process.env.PORT || settings.webPort;

app.use('/graphql',  graphqlHTTP({  
    schema:  MyGraphQLSchema,
      graphiql:  true
})); 

app.listen(port);