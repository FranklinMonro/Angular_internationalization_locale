import { Request, Response, NextFunction } from 'express';
import { randomUUID } from 'crypto';

import { SEQUILIZE_NEW } from '../../server/config';
import { initModels } from '../../models-auto/init-models';
import { DateTime } from 'luxon';

const { register } = initModels(SEQUILIZE_NEW);

const getRegister = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const findAll = register.findAll({
            raw: true,
        }).catch((err: ErrorEvent) => {
            throw new Error(`Error message: ${err.message}`);
        });
        res.status(200).send(findAll);
    } catch (error) {
        next(error);
    }
};

const postRegister = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { 
            firstname,
            surname,
            luxon_date_tz,
            luxon_date,
            javascript_date_tz,
            javascript_date,
            component,
            timezone,
        } = req.body

        const create = register.create({
            id: randomUUID(),
            firstname,
            surname,
            created_date_tz: DateTime.now().toBSON(),
            created_date: DateTime.now().toBSON(),
            luxon_date_tz,
            luxon_date,
            javascript_date_tz,
            javascript_date,
            component,
            timezone,
        },
        {
            raw: true,
        }).catch((err: ErrorEvent) => {
            throw new Error(`Error message: ${err.message}`);
        });
    } catch (error) {
        next(error);
    }
};

export {
    getRegister,
    postRegister,
};