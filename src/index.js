import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';

const app = express();

app.use(express.static(__dirname + '../public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));

app.listen('3000',() => {
  console.log('server is listening ....');
});

app.get('/',(req,res) => {
  res.send('Hello World');
});
