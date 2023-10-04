const findProjects = require("../database/findProjects")

const getAllProjects = () => {
  const allProjects = findProjects.getAllProjects();
  return allProjects
}

const getOneProject = () => {
  return;
}

const createNewProject = () => {
  return;
}

const updateOneProject = () => {
  return;
}

const deleteOneProject = () => {
  return;
}

module.exports = {
  getAllProjects,
  getOneProject,
  createNewProject,
  updateOneProject,
  deleteOneProject
}