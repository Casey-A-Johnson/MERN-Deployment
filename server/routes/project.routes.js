const projectController = require("../controllers/project.controller");

module.exports = (app) => {
  app.post("/project/new", projectController.createProject);
  app.get("/project/all", projectController.allProjects);
  app.get("/project/:id", projectController.oneProject);
  app.put("/project/update/:id", projectController.updateProject);
  app.delete("/project/delete/:id", projectController.deleteProject);
};
