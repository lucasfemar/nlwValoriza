import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";


class AuthenticateUserController {
    async handle(request: Request, reponse: Response) {
        const { email, password } = request.body;
        const authenticateUserService = new AuthenticateUserService();

        const token = await authenticateUserService.execute({
            email,
            password,
        });

        return reponse.json(token);
    }
}

export { AuthenticateUserController };