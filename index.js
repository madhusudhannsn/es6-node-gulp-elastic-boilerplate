import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import logger from './src/logger';
import user from './routes/user';

const app = express();
const log = logger();

app.use(express.static(__dirname + '../public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(morgan('dev'));
app.use('/user', user);

app.listen('3000', () => {
	log.info('server is running');
});
app.get('/', (req, res) => {
	log.info('Hey World');
	res.send('Hey World');
});
