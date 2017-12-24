const  express  =  require('express');
const  graphqlHTTP  =  require('express-graphql'); 
const  app  =  express(); 
const schema = require('./schema');

/*************SET UP*************/
var ctlr = require('../controllers')
var settings = require('../settings');
var bodyParser = require('body-parser');
var port = process.env.PORT || settings.webPort;

/*************MIDDLEWARE*************/
app.use(bodyParser.json()); //parse out json in the http req body
app.use(bodyParser.urlencoded({ extended: true })); //handle characters converted to % #

app.use('/graphql',  graphqlHTTP({  
    schema:  MyGraphQLSchema,
      
    graphiql:  true
})); 

/*************ENDPOINTS*************/



app.listen(port);