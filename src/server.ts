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
    await connection;
    console.log('Banco de dados conectado com sucesso!');
    console.log(`Servidor disponível na porta: ${port}`);
});
