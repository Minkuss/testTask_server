const projectService = require('../services/projectService');

const getAllProjects = (req, res) => {
  const allProjects = projectService.getAllProjects();
  allProjects.then((allProjects) => {
    res.send({status: "OK", data: allProjects});
  })
}

const getOneProject = (req, res) => {
  const projects = projectService.getOneProject;
  res.send('Get an existing project');
}

const createNewProject = (req, res) => {
  const createdProject = projectService.createNewProject;
  res.send('Create a new project');
}

const updateOneProject = (req, res) => {
  const uptadetProject = projectService.updateOneProject;
  res.send('Update an existing project');
}

const deleteOneProject = (req, res) => {
  projectService.deleteOneProject();
  res.send('Delete an existing project');
}

module.exports = {
  getAllProjects,
  getOneProject,
  createNewProject,
  updateOneProject,
  deleteOneProject
}