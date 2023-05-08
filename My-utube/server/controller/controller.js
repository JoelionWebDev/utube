const User = require(".././server/model/model");
const asyncWrapper = require("../middleware/async-wrapper");
const CreateCustomError = require("../errors/errors-CustomApi");

const getAllTask = asyncWrapper(async (req, res) => {
  const tasks = await User.find({});
  res.status(200).json(tasks);
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await User.create(req.body);
  res.status(201).json(task);
});

const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await User.findOne({ _id: taskID });
  if (!task) {
    return next(CreateCustomError(`No task with the Id : ${taskID}`));
  }
  res.status(200).json(task);
});

const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await User.findOneAndDelete({ _id: taskID });
  if (!task) {
    return next(CreateCustomError(`No task with the Id : ${taskID}`));
  }
  res.status(200).json(task);
});

const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await User.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return next(CreateCustomError(`No task with the Id : ${taskID}`));
  }

  res.status(200).json({ task });
});

module.exports = {
  getAllTask,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
