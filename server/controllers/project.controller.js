const { Project } = require("../models/project.model");

//Create
module.exports.createProject = (req, res) => {
  Project.create(req.body)
    .then((job) => res.json(job))
    .catch((err) => res.status(400).json(err));
};

// Get All
module.exports.allProjects = (req, res) => {
  Project.find()
    .sort({ date: 1 })
    .then((jobs) => res.json(jobs))
    .catch((err) => res.json(err));
};

// Get One
module.exports.oneProject = (req, res) => {
  Project.findOne({ _id: req.params.id })
    .then((job) => res.json(job))
    .catch((err) => res.json(err));
};

// Update
module.exports.updateProject = (req, res) => {
  Project.findByIdAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatejob) => res.json(updatejob))
    .catch((err) => res.status(400).json(err));
};

// Delete
module.exports.deleteProject = (req, res) => {
  Project.deleteOne({ _id: req.params.id })
    .then((deleteConfirmation) => res.json(deleteConfirmation))
    .catch((err) => res.json(err));
};
