import { createConnection } from 'typeorm';
import { Comment } from '../entities/comment.entity';


export const connection = createConnection({
    type: 'postgres',
    host: 'ec2-3-230-122-20.compute-1.amazonaws.com',
    port: 5432,
    username: 'einodddhwgywnr',
    password: 'b3f22b576b2b28403f520d8f267f9def18c1e3b2b49566e1ac7a0bbe0eaea352',
    database: 'dn2qpo3t1vpov',
    entities: [
        Comment
    ],
    // logging: true,
    // synchronize: true,
    ssl: true,
    extra: {
        ssl: {
            rejectUnauthorized: false,
        }
    }
});