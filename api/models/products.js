const Mongoose = require("mongoose ");

const ProductsSchema = new mongoose.Schema(
  {
    title: { type: string, required: true, unique: true },
    desc: { type: string, required: true },
    img: { type: string, required: true },
    categories: { type: Array },
    size: { type: Array },
    color: { type: Array },
    price: { type: number, required: true },
    inStock: { type: Boolean, required: true },
  },

  { timestamps: true }
);
module.exports = Mongoose.model("Product", ProductsSchema);
