import { useState } from "react";
import AddTask from "./AddTask";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";

export default function TaskBoard() {
  const defaultTasks = [
    {
      id: crypto.randomUUID(),
      title: "Integration API",
      description:
        "Connect an existing API to a third-party database using secure methods and handle data exchange efficiently.",
      tags: ["Web", "Python", "API"],
      priority: "High",
      isFavorite: true,
    },
  ];

  const [tasks, setTasks] = useState(defaultTasks);
  const [isAddTask, setIsAddTask] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  const handleAddTaskClose = () => {
    setIsAddTask(false);
    setTaskToUpdate(null);
  };

  const handleClickTask = (newTask, isAdd) => {
    if (isAdd) {
      setTasks([...tasks, { ...newTask, id: crypto.randomUUID() }]);
    } else {
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          }
          return task;
        })
      );
    }
    setIsAddTask(false);
    setTaskToUpdate(null);
  };

  const handleEditTask = (taskToEdit) => {
    setTaskToUpdate(taskToEdit);
    setIsAddTask(true);
  };

  const handleAddNewTask = () => {
    setTaskToUpdate(null);
    setIsAddTask(true);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleFavorite = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, isFavorite: !task.isFavorite } : task
      )
    );
  };

  return (
    <section className="mb-20" id="tasks">
      {isAddTask && (
        <AddTask
          onSave={handleClickTask}
          onClose={handleAddTaskClose}
          taskToUpdate={taskToUpdate}
        />
      )}
      <div className="container">
        {/* Search Box */}
        <div className="p-2 flex justify-end">
          <SearchTask />
        </div>
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          {/* Task Action */}
          <TaskAction onAddClick={handleAddNewTask} />
          {/* Task List */}
          <TaskList
            tasks={tasks}
            onEdit={handleEditTask}
            onDelete={handleDeleteTask}
            onFavorite={handleFavorite}
          />
        </div>
      </div>
    </section>
  );
}
