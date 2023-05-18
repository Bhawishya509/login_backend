import express from "express";
import { auth } from "../database/savesdata.js";
import {datacollects} from "../component/datacollection/datacollect.js"
const route = express.Router();
route.get("/", (req, res) =>
{
    res.send("yes working")
})
route.get("/collectdata",datacollects)
route.post("/register",auth)
export {route} 