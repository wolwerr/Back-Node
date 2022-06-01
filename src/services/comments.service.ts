import { generateMessage } from "../helpers/message.helper";
import { Comment } from "../entities/comment.entity";
import { CommentRepository } from "../repositories/comment.repository";

class CommentsService {

    async getAll() {
        return CommentRepository.getAll();
    }

    getById(id: number) {
        if (!id) throw new Error('O campo Id é obrigatório!');
        if(!Number(id)) throw new Error('O campo de id precisa ser numérico');
        return CommentRepository.getById(id);
    }


    create(comment: Comment) {
        return CommentRepository.create(comment);
    }

    remove(id: number) {
        return CommentRepository.delete(id);
    }

    update(id: number, comment: Comment) {
        return CommentRepository.update(id, comment);
    }

    authenticate(email: string, password: string) {
        return CommentRepository.getLogin(email, password)
      }
}

export default new CommentsService();