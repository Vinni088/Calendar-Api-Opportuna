import express, { Request, Response, json } from "express";
import errorMiddleware from "./middlewares/errorMiddleware";
import httpStatus from "http-status";
import "express-async-errors";
import cors from 'cors';
import { remindersRouter } from "./routers/reminders.router";

// configs iniciais:
const app = express();
app.use(json());
app.use(cors())

// routers usados
app.use(remindersRouter);

// rota health
app.get("/health", (req: Request, res: Response) => {
  res.status(httpStatus.OK).send("I'm ok!");
});

app.get("/", (req: Request, res: Response) => {
  res.status(httpStatus.OK).send(
    `
    <div style="
        width: 95vw; 
        height: 95vh; 
        display: flex; 
        justify-content: center; 
        align-items: center;
        ">
        <p style="
        padding: 10px;
        font-size: 2vmax; 
        border: 2px solid gray;
        background-color: lightgray;
        border-radius: 10px;
        ">
            Opa! parece que você está tentando acessar o backend da aplicação "Callendar challenge" <br/>
            Se esse for o caso, consulte o repositorio do projeto em: <a href="https://github.com/Vinni088/Calendar-Api-Opportuna"> Github: Calendar-Api-Opportuna </a> 
        </p>
    <div>
    `
  );
});

// Middleware de tratamento de erros
app.use(errorMiddleware);

export default app;