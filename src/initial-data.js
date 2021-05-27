const initialData = {
  tasks: {
    "task-1": {id: "task-1", content: "Task out the garbage"},
    "task-2": {id: "task-2", content: "Cook dinner"},
    "task-3": {id: "task-3", content: "Watch my favorite show"},
    "task-4": {id: "task-4", content: "Charge my phone"},
  },
  lists: {
    "list-1": {
      id: "list-1",
      title: "To do",
      taskIds: ["task-1", "task-2", "task-3", "task-4"],
    },
  },
  boards: {
    "board-1": {
      id: "board-1",
      name: "Demo Board",
      listIds: ["list-1"],
    },
  },
};

export default initialData;
