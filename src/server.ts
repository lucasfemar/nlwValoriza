import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";

import { router } from "./routes"

// Ja identifica que o arquivo que sera importato é o index
import "./database"

// @types/express
const app = express();

app.use(express.json()) // falando pro express que vamos usar json nas requisições

app.use(router)

// Middleware para tratar erros
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    // Todos os erros que usamos *throw new Error* no nosso código
    if (err instanceof Error) {
        return response.status(400).json({ error: err.message })
    }
    // Erros restantes
    return response.status(500).json({ status: "error", message: "Internal Server Error" })
})

//Iniciar o servidor
app.listen(3000, () => console.log("******** SERVER IS RUNNING ********"));
