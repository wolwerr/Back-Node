import { createConnection } from 'typeorm';
import { Comment } from '../entities/comment.entity';


export const connection = createConnection({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123',
    database: 'commentNode',
    entities: [
        Comment
    ],
    logging: true,
    synchronize: true
});