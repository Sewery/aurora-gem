import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { Request, Response, NextFunction , RequestHandler} from 'express';
import CustomerInterface from './interfaces/CustomerInterface';

dotenv.config({path: '../.env'});
const SECRET_KEY_ACCESS = process.env.SECRET_KEY_ACCESS as string;

interface CustomerRequest extends Request {
    customer?: {
        id: number;
        email: string;
    };
}

if (!SECRET_KEY_ACCESS) {
    throw new Error('SECRET_KEY is not defined in the environment variables');
}

const AuthorizedMiddleware:RequestHandler = (req:CustomerRequest, res:Response, next:NextFunction): void => {
    const { authorization } = req.headers;
    if (!authorization) {
        res.status(401).json({ message: 'Unauthorized' });
        return;
    }
    const token = authorization.split(' ')[1];
    try{
        const customer = jwt.verify(token, SECRET_KEY_ACCESS) as CustomerInterface;
        req.customer = customer;
        next();
    }
    catch(err){
        res.status(403).json({ error: 'Invalid token'});
    }
  
};

export default AuthorizedMiddleware;