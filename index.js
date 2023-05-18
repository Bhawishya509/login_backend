import express from "express";
import {route} from "./routes/Routes.js";
import cors from "cors"
const app = express();
app.use(cors())
app.use(express.json())
app.use(route)
app.listen(8000, () =>
{
    console.log("server is working")
})