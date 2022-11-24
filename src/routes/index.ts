import { Router } from 'express';
import authRouter from '@/routes/auth';
import noticeRouter from '@/routes/notice';
import scrapRouter from '@/routes/scrap';
import categoryRouter from '@/routes/category';

const router = Router();

/**
 * server health check
 */
router.get('/', (req, res) => {
  res.send(
    '<h1>Devkor project app</h1> <h4>Message: Server is alive</h4> <p>Version 1.0</p>',
  );
});

router.use('/auth', authRouter);
router.use('/notices', noticeRouter);
router.use('/scraps', scrapRouter);
router.use('/category', categoryRouter);

export default router;
