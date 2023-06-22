const { Router } = require("express");
const {
  getAllTodos,
  getTodo,
  createTodo,
  editTodo,
  deleteTodo,
} = require("../controllers/todoController");
const router = Router();

router
  .get("/", getAllTodos)
  .get("/:id", getTodo)
  .post("/create", createTodo)
  .patch("/:id", editTodo)
  .delete("/:id", deleteTodo);

module.exports = router;
