
import { schema } from "../../database/schema.js";
import mongoose from "mongoose";
const pass = "Bhawishya11";
const collection_name = "ecom";
const mongo = `mongodb+srv://Bhawishya:${pass}@cluster0.ehz40xr.mongodb.net/${collection_name}?retryWrites=true&w=majority`;
mongoose.connect(mongo, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
const datacollects = (req, res) => {
    const fani = async () =>
    {
    
        let datta = await mongoose.model("Register", schema).find()
        let len = datta.length - 1;
        res.send(datta[len]);
       }
  
    
    fani()
};
export { datacollects };