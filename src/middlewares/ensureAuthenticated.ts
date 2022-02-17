// Importação necessarios para cria um middleware
import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayLoad {
    sub: string;
}
export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {

    // Receber o token
    const authToken = request.headers.authorization;
    // Validar se token esta preenchido

    if (!authToken) {
        return response.status(401).end();
    }

    // Validar se o token é válido
    const [, token] = authToken.split(" "); // [,toke] -> ignora a primeira posição do split, e a segunda posição coloca na variável token

    try {
        const { sub } = verify(token, "1d1e55d3e1784ad4d8f00fe437a11dd4") as IPayLoad; // Forçando o verify a ser do tipo IPayLoad
        
        // Recuperar informações do usuário
        request.user_id = sub;
        return next();
    } catch (err) {
        return response.status(401).end();
    }


};