import { Request, Response, NextFunction } from 'express';
import { randomUUID } from 'crypto';

import { SEQUILIZE_NEW } from '../../server/config';
import { initModels } from '../../models-auto/init-models';

const { register } = initModels(SEQUILIZE_NEW);

const getRegister = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        
    } catch (error) {
        next(error);
    }
};

const postRegister = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        
    } catch (error) {
        next(error);
    }
};

export {
    getRegister,
    postRegister,
};