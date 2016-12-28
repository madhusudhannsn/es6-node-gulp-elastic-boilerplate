import winston from 'winston';
import WinElastic from 'winston-elasticsearch';
import elasticsearch from 'elasticsearch';

let logger = null;
const client = new elasticsearch.Client({
	host: 'localhost:9200',
	log: 'info'
});
const esTransportOpts = {
	level: 'info',
	index: 'ts-uaf',
	client: client,
	consistency : false
};

export default function() {
    if (logger === null) {
        console.log('initializing the logger');
        logger = new winston.Logger({
            transports: [
                new(winston.transports.Console)()
            ]
        });
				elasticConnectStatus(err => {
					if(!err) {
						logger.add(winston.transports.Elasticsearch, esTransportOpts);
					}
				});
    }
    return logger;
}

function elasticConnectStatus (callback) {
	client.ping({
	    requestTimeout: 3000
	}, (error) => {
	    if (error) {
	        console.trace('elasticsearch is not running!. Not adding elastic transport');
					callback(error);
			} else {
	        console.log('All is well');
					callback(null);
	    }
	});
}
