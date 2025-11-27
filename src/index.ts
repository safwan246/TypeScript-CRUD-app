import express from 'express';
import { connectDBS } from './db/moongos.js';
import type{ Application } from "express";
import userRouter from '../router/userRouter.js';

const app:Application = express();
const port = process.env.PORT || 3000

app.use(express.json());
app.use(express.urlencoded({extended:true}))
await connectDBS()


app.use('/',userRouter)

app.listen(port, () => {
  console.log("server running");
});
