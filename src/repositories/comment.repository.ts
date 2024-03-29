import { Comment } from '../entities/comment.entity';
import { getConnection } from 'typeorm';

export class CommentRepository {

    static getAll() {
        return getConnection()
        .getRepository(Comment)
        .find();
    }

    static getById(id: number) {
        return getConnection()
        .getRepository(Comment)
        .findOne({ where: { id } });
    }

    static create(comment: Comment) {
        return getConnection()
        .getRepository(Comment)
        .insert(comment);
    }

    static delete(id: number) {
        return getConnection()
        .getRepository(Comment)
        .delete({
            id: id,
        });
    }

    static update(id: number, comment: Partial<Comment>) {
        return getConnection()
        .getRepository(Comment)
        .update({
            id: id
        }, comment);
    }

    static async getLogin(email: string, password: string) {
        return getConnection()
            .getRepository(Comment)
            .findOne(
                {
                    where: {
                        email: email,
                        password: password
                    }
                }
            )
    }
}
