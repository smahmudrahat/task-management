import { useState } from "react";

export default function AddTask({ onClose, onSave }) {
  const [task, setTask] = useState({
    title: "",
    description: "",
    tags: [],
    priority: "",
    isFavorite: false,
  });

  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    if (name === "tags") {
      value = value.split(",");
    }
    setTask({ ...task, [name]: value });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-md bg-[#1D212B] p-6 rounded-xl">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-200"
          onClick={onClose}
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-6">Add New Task</h2>
        <form
          className="space-y-9 text-white"
          onSubmit={(e) => {
            e.preventDefault();
            onSave(task);
            onClose();
          }}
        >
          <div className="space-y-2">
            <label htmlFor="title">Title</label>
            <input
              className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5 shadow-inner"
              type="text"
              name="title"
              id="title"
              value={task.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="description">Description</label>
            <textarea
              className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px] shadow-inner"
              type="text"
              name="description"
              id="description"
              value={task.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
            <div className="space-y-2">
              <label htmlFor="tags">Tags</label>
              <input
                className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5 shadow-inner"
                type="text"
                name="tags"
                id="tags"
                value={task.tags}
                onChange={handleChange}
                placeholder="Separate tags with commas"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="priority">Priority</label>
              <select
                className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5 shadow-inner"
                name="priority"
                id="priority"
                value={task.priority}
                onChange={handleChange}
                required
              >
                <option value="">Select Priority</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>
          <div className="mt-16 flex justify-center">
            <button
              type="submit"
              className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80 shadow-lg hover:shadow-xl"
            >
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
