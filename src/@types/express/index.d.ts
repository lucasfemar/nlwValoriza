// Criando o parametro user_id dentro do express para poder usar no request
// Ativar em tsconfig.json -> "typeRoots": ["./src/@types"],
declare namespace Express {
    export interface Request {
        user_id: string;
    }
}