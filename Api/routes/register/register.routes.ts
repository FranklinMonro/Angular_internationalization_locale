import express from 'express';
import { getRegister, postRegister } from './register.controllers';

class RegisterRouter {
    public router = express.Router();

    constructor() {
        this.router.get('', getRegister);

        this.router.post('', postRegister);

    }
}

export default new RegisterRouter().router;