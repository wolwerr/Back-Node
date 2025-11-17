import express, { Request, Response } from 'express';
import cors from 'cors';
import commentsRouter from './routes/comments.routes';
import { connection } from './database/config';
import 'dotenv/config';


const port = 3000;
const app = express();

app.use(cors());

app.use(express.json());

app.use('/', commentsRouter);


app.get('/', (req: Request, res: Response) => {
    const messageObject = {
        message: "Sistema no ar"
    };
    res.send(messageObject);
});


app.listen(process.env.PORT || port, async () => {
    try {
        const conn = await connection;
        if (conn) {
            console.log('Banco de dados conectado com sucesso!');
        } else {
            console.log('Servidor iniciado SEM conexão com banco de dados.');
            console.log('Verifique as configurações do banco de dados no arquivo .env');
        }
    } catch (error: any) {
        console.error('Erro ao conectar ao banco de dados:', error.message);
        console.log('Servidor iniciado SEM conexão com banco de dados.');
        console.log('Verifique as configurações do banco de dados no arquivo .env');
    }
    console.log(`Servidor disponível na porta: ${port}`);
});


// connection.then(() => {
//     console.log('Banco de dados conectado com sucesso!');
// }).catch((err) => {
//     console.log(err);
// });