const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.getAll = async (req, res) => {
  try {
    const result = await User.find({});

    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};

exports.getOne = async (req, res) => {
  const { _id } = req.params;
  try {
    const result = await User.findById({ _id });
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};

exports.createUser = async (req, res) => {
  const newObj = req.body;
  try {
    console.log(req.body);
    if (newObj) {
      const hashedPass = await bcrypt.hash(newObj.password, 10);
      const newObj2 = { ...newObj, password: hashedPass };
      const result = await User.create(newObj2);
      res.json({ status: true, result });
    }
  } catch (err) {
    res.json({ status: false, message: err });
  }
};
exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res
      .status(500)
      .send({ status: false, message: "Medeelelee buren oruulna uu" });
    return;
  }

  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    const token = jwt.sign({ user: user }, process.env.TOKEN_SECRET_KEY, {
      expiresIn: "2h",
    });
    res
      .status(200)
      .send({ status: true, data: user, message: "Success", token });
    return;
  } else {
    res.status(400).send({
      status: false,
      message: "user oldsongui ee, nuuts ug taarahgui bna",
    });
    return;
  }
};

exports.updateUser = async (req, res) => {
  const { _id } = req.params;
  try {
    const result = await User.findByIdAndUpdate({ _id }, req.body);
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};
exports.deleteUser = async (req, res) => {
  const { _id } = req.params;
  try {
    const result = await User.findByIdAndDelete({ _id });
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};
