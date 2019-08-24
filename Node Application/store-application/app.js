require('./data/db'); // mainly to run the script to connect to DB
require('./models/product'); // Will define Product model
const express =  require('express');
const config =  require('./config/app.json');
const path = require('path');
const morgan = require('morgan');
const indexRouter = require('./routes/index');
const productApIRouter = require('./api/routes/product');
const productRouter =  require('./routes/product');


// aplication object
const app =  express();

// you can specify multiple paths by repeating app.use() with different 
app.use(express.static (path.resolve(__dirname,'public')));

// accept form data and parse it, form data parser
app.use(express.urlencoded());

// accept JSON data and parse it
app.use(express.json());

// using morgan library
app.use(morgan('combined'));

// log incoming request using a middleware (if you use URL then prefix-matchinng will be done)
// this matches /admin, /admin/xyz,/admin/123
app.use(function( req,res,next){
  console.log(req.url);
  // pre-processing onrequest object
  req.timestamp = (new Date ()). toString();
  console.log(new Date().toString());
  next();
  console.log('request servcied by someone -1');
});


app.use(function( req,res,next){
   console.log(req.headers['user-agent']);
   next();
   console.log('request servcied by someone - 2');
 });

 // set up middleware to parse incoming request body

if(process.env.NODE_ENV = 'development'){
  global.enviornment = 'development';
  app.set('env','development');
}
else{
   global.enviornment = 'production';
   app.set('env','production');
}  


app.set('views', path.resolve(__dirname, "views"));

app.set('view engine','ejs');

app.use('/', indexRouter);


app.use('/products',productRouter);

//app.use('/api/products',productApIRouter);

//app.post('/products', function (req,res,next) {
   // we will have req.body set to the incoming data by the body parser middleware
  // res.json(req.body);
//});

//app.use('/products', productRouter);

app.use(function(req,res,next) {
   res.setHeader('Content-Type','text/html');
   res.render ('error',  {
      error: new Error ('Requested page is not found')
      , env : app.get('env')
   });
});

console.log('NODE_ENV', process.env.NODE_ENV);

console.log('PORT', config.defaultConfigPort);
const PORT =   process.env.PORT || config.defaultConfigPort;



app.listen (PORT, function(error){
   if(error){
       console.log('Sever could not be started');
       console.log(error.message);
       return;
   }
   else{
       console.log('Server sunning at http;//localhost:3000');
   }
});