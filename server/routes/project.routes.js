const projectController = require("../controllers/project.controller");

module.exports = (app) => {
  app.post("/api/project/new", projectController.createProject);
  app.get("/api/project/all", projectController.allProjects);
  app.get("/api/project/:id", projectController.oneProject);
  app.put("/api/project/update/:id", projectController.updateProject);
  app.delete("/api/project/delete/:id", projectController.deleteProject);
};
