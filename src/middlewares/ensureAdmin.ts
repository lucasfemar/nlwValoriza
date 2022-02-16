// Importação necessarios para cria um middleware
import { Request, Response, NextFunction } from "express";

export function ensureAdmin(request: Request, response: Response, next: NextFunction) {
    // Verificar se o usuário é admin
    const admin = true;

    if (admin) {
        return next();
    }

    // 401 = Unauthorized
    return response.status(401).json({error: "Unauthorized"})
};