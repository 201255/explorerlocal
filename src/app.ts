import express, {Application, Request, Response} from 'express';
import proxy from 'express-http-proxy';
import morgan from 'morgan';

import dotenv from 'dotenv';
import { Signale } from "signale";

const app:Application = express();
const signale = new Signale();

app.use(morgan('dev'));

dotenv.config();
const PORT = process.env.PORT || 3000;




//Review
app.use('/api/v1/Review', proxy('http://service3-env.eba-mwncfzqa.us-east-1.elasticbeanstalk.com'));

//User
app.use('/api/v1/User', proxy('http://servicio1-env.eba-aikdu2nx.us-east-1.elasticbeanstalk.com'));

//Restaurant
app.use('/api/v1/Menu', proxy('http://servicio2-env.eba-yv5qtqpq.us-east-1.elasticbeanstalk.com'));
app.use('/api/v1/Restaurant', proxy('http://servicio2-env.eba-yv5qtqpq.us-east-1.elasticbeanstalk.com'));

app.get('/rutine', (req: Request, res: Response) => {
    res.status(200).send('Rutina ejecutáda con éxito todo chido');
})

app.listen(PORT,() => {
    signale.success(`Servidor corriendo en http://localhost:${PORT}`);
});
