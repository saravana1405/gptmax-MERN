const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userModel = require("./model/Datas");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/gpt-users");

app.post("/signin", (req, res) => {
  const { email2, password2 } = req.body;
  userModel.findOne({ email: email2 }).then((user) => {
    console.log(user);
    if (user) {
      if (user.password === password2) {
        res.json("Success");
      } else {
        res.json("Password is Incorrect");
      }
    } else {
      res.json("Invalid User");
    }
  });
});
app.post("/signup", (req, res) => {
  userModel
    .create(req.body)
    .then((userdata) => res.json(userdata))
    .catch((err) => res.json(err));
});

app.listen(process.env.PORT || 3333, () => console.log("server is running"));
