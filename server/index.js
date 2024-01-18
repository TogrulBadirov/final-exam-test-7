import cors from "cors";
import express from "express";
import mongoose from "mongoose";
const app = express();
app.use(express.json());
app.use(cors());
const port = 3000;

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: String,
  desc: String,
  price: String,
  category: String,
});

const Products = mongoose.model("Pulse", ProductSchema);

app.get("/", async (req, res) => {
  try {
    const allProducts = await Products.find({});
  res.send(allProducts);
  } catch (error) {
    console.log(error);
  }
});

app.get("/:id", async (req, res) => {
    try {
        const {id} = req.params
    const product = await Products.findById(id);
  res.send(product);
    } catch (error) {
        console.log(error);
    }
});

app.post("/", async (req, res) => {
   try {
    const newProduct = new Products(req.body)
    await newProduct.save()
  res.send("Product Created!");
   } catch (error) {
    console.log(error);
   }
});

app.delete("/:id", async (req, res) => {
   try {
    const {id} = req.params
    const product = await Products.findByIdAndDelete(id);
     res.send("Product deleted!");
   } catch (error) {
    console.log(error);
   }
});

mongoose
  .connect("mongodb+srv://togrul:togrul@firstcluster.udpwqcz.mongodb.net/")
  .then(() => console.log("Connected!"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
