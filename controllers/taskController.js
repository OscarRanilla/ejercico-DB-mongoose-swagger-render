const Task = require('../models/Task');

// Crear una tarea
const createTask = async (req, res) => {
    try {
        const task = await Task.create({ title: req.body.title, completed: false });
        res.status(201).json({ message: 'Tarea creada', task });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear la tarea', error });
    }
};

// Obtener todas las tareas
const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las tareas', error });
    }
};

// Obtener tarea por ID
const getTaskById = async (req, res) => {
    try {
        const task = await Task.findById(req.params._id);
        if (!task) return res.status(404).json({ message: 'Tarea no encontrada' });
        res.json(task);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la tarea', error });
    }
};

// Actualizar título de una tarea
const updateTaskTitle = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params._id, { title: req.body.title }, { new: true });
        if (!task) return res.status(404).json({ message: 'Tarea no encontrada' });
        res.json({ message: 'Tarea actualizada', task });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar la tarea', error });
    }
};

// Marcar como completada
const markCompleted = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params._id, { completed: true }, { new: true });
        if (!task) return res.status(404).json({ message: 'Tarea no encontrada' });
        res.json({ message: 'Tarea marcada como completada', task });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar la tarea', error });
    }
};

// Eliminar una tarea
const deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params._id);
        if (!task) return res.status(404).json({ message: 'Tarea no encontrada' });
        res.json({ message: 'Tarea eliminada' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la tarea', error });
    }
};

module.exports = {
    createTask,
    getAllTasks,
    getTaskById,
    updateTaskTitle,
    markCompleted,
    deleteTask
};
