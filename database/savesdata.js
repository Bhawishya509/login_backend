import express from "express";
const app = express();
import {schema} from "../database/schema.js"

import mongoose from "mongoose";
const pass = 'Bhawishya11';
const collection_name = 'ecom';
const mongo = `mongodb+srv://Bhawishya:${pass}@cluster0.ehz40xr.mongodb.net/${collection_name}?retryWrites=true&w=majority`
mongoose.connect(mongo, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
const auth=async  (req, res) =>
{

    

    let mod = mongoose.model("Register", schema);
    let data = new mod({
        name:req.body.name,
        email: req.body.email,
        phone:req.body.phone,
        links: req.body.links,
        country: req.body.country,
        state: req.body.state,
        city:req.body.city,
        pincode:req.body.pincode
        
    });
    await data.save();
    res.send(req.body)
   
}
export {auth}