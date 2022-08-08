const Mongoose = require("mongoose ");

const UserSchema = new mongoose.Schema(
  {
    username: { type: string, required: true, unique: true },
    email: { type: string, required: true, unique: true },
    password: { type: string, required: true },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    img: { type: string },
  },

  { timestamps: true }
);
module.exports = Mongoose.model("User", UserSchema);
