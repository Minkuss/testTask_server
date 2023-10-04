const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

router.get('/', projectController.getAllProjects)

router.get('/:projectId', projectController.getOneProject)

router.post('/', projectController.createNewProject);

router.patch('/:projectId', projectController.updateOneProject);

router.delete('/:projectId', projectController.deleteOneProject);

module.exports = router;