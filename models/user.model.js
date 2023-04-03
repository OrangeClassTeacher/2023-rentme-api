const { default: mongooose } = require("mongoose");

const userSchema = mongooose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please provide an firts name"],
    },
    lastName: {
      type: String,
      required: [true, "Please provide an firts name"],
    },
    username: {
      type: String,
      required: [true, "Please provide an username"],
      unique: [true, "Username exists"],
    },

    email: {
      type: String,
      required: [true, "Please provide an Email!"],
      unique: [true, "Email Exist"],
    },
    birthDate: {
      type: Date,
      required: [true, "BirthDate"],
    },
    phoneNumber: {
      type: Number,
      required: [true, "Number"],
      unique: [true, "Phone Number exists"],
    },
    password: String,
    gender: Number,

    order: [String],

    favItems: [String],
  },
  { collection: "users", timestamps: true }
);

const User = mongooose.model("User", userSchema);

module.exports = User;
//s
