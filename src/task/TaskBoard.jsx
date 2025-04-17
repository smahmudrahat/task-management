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
      isFavorite: false,
    },
  ];

  const [tasks, setTasks] = useState(defaultTasks);
  const [isAddTask, setIsAddTask] = useState(false);

  const handleAddTaskClose = () => {
    setIsAddTask(false);
  };

  const handleClickTask = (task) => {
    console.log("adding task", task);
  };

  return (
    <section className="mb-20" id="tasks">
      {isAddTask && (
        <AddTask onSave={handleClickTask} onClose={handleAddTaskClose} />
      )}
      <div className="container">
        {/* Search Box */}
        <div className="p-2 flex justify-end">
          <SearchTask />
        </div>
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          {/* Task Action */}
          <TaskAction onAddClick={() => setIsAddTask(true)} />
          {/* Task List */}
          <TaskList tasks={tasks} />
        </div>
      </div>
    </section>
  );
}
