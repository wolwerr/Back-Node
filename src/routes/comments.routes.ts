import { Router, Request, Response } from 'express';
import { generateMessage } from '../helpers/message.helper';
import CommentsService from '../services/comments.service';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    const comments = await CommentsService.getAll();
    res.send(comments);
});

router.get('/:id', async (req: Request, res: Response) => {
    try {
        const result = await CommentsService.getById(parseInt(req.params.id));
        res.send(result);
    } catch (e) {
        res.status(500).send(e);
    }
    
});

router.post('/', async (req: Request, res: Response) => {
    await CommentsService.create(req.body);
    res.status(201).send(generateMessage("Comment criado com sucesso!"));
});


router.delete('/remove/:id', async (req: Request, res: Response) => {
    const commentId = parseInt(req.params.id);
    const comment = await CommentsService.getById(commentId);
    if (!comment) return res.status(404).send(generateMessage('Comment não encontrado! '));

    await CommentsService.remove(commentId);
    return res.status(200).send(generateMessage('Comment removido com sucesso!' ));
});

router.put('/update/:id/', async (req: Request, res: Response) => {
    const commentId = parseInt(req.params.id);
    const comment = await CommentsService.getById(commentId);
    if (!comment) return res.status(404).send(generateMessage('Comment não encontrado! '));

    await CommentsService.update(commentId, req.body);

    res.status(200).send(generateMessage('Comment atualizado com sucesso!'));
});


export default router;