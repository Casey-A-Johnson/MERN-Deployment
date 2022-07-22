const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const projectSchema = new mongoose.Schema(
  {
    project: {
      type: String,
      required: [true, "Project is required"],
      minLength: [3, "Project must be at least 3 characters"],
      unique: [true, "Project already exist"],
    },
    date: {
      type: Date,
      required: [true, "Date is required"],
    },
    log: {
      type: String,
      default: "backlog",
    },
  },
  { timestamps: true }
);

projectSchema.plugin(uniqueValidator);

module.exports.Project = mongoose.model("Project", projectSchema);
