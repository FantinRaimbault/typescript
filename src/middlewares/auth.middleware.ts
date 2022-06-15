import { Request, Response, NextFunction } from 'express';

export const authorize = (roles = []) => {
    return (req: Request, res: Response, next: NextFunction) => {
        throw new Error('Not implemented')
    }
}