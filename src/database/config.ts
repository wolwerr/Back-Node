import { createConnection } from 'typeorm';
import { Comment } from '../entities/comment.entity';
import 'dotenv/config';

export const connection = createConnection({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT!, 
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [ Comment ],
    logging: true,
    synchronize: true,
    ssl: false,
    extra: {
        ssl: {
            rejectUnauthorized: false,
        }
    }
}).catch((error) => {
    console.error('Error ao conectar ao banco de dados:');
    console.error(error.message);
    console.error('Verifique as configurações do banco de dados no arquivo .env');
    return null;
});
