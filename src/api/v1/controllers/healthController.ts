import { Request, Response } from 'express';

export const health = async (_req: Request, res: Response) => {
    return res.json({ status: 'ok', time: new Date().toISOString() });
};
