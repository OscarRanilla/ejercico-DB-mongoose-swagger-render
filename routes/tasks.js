const express = require("express");
const router = express.Router();
const { createTask, getAllTasks, getTaskById, updateTaskTitle, markCompleted, deleteTask } = require('../controllers/taskController');

router.post('/create', createTask);
router.get('/', getAllTasks);
router.get('/id/:_id', getTaskById);
router.put('/id/:_id', updateTaskTitle);
router.put('/markAsCompleted/:_id', markCompleted);
router.delete('/id/:_id', deleteTask);

module.exports = router;