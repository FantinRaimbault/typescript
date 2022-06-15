import { Request, Response, NextFunction } from 'express';

jest.mock('../../src/middlewares/auth.middleware', () => {
    return {
        authorize: jest.fn(() => {
            return (req: Request, res: Response, next: NextFunction) => {
                console.log('im mockeddazdaz')
                next()
            }
        })
    }
});