import { defineStore } from "pinia";
import { Task } from "../models/task";

const url = "http://localhost:3001/tasks";

export const useTaskStore = defineStore("taskStore", {
  state: () => {
    return {
      tasks: [] as Task[],
      loading: false,
      error: "",
    };
  },
  getters: {
    totalCount: (state) => state.tasks.length,
    favs: (state) => state.tasks.filter((t) => t.fav),
    favCount: (state) => state.tasks.filter((t) => t.fav).length,
  },
  actions: {
    async getTasks() {
      this.loading = true;
      try {
        const res = await fetch(url);
        const data = await res.json();
        this.tasks = data;
      } catch {
        this.error = "Error fetching tasks, did you forgot to run json-server?";
      }
      this.loading = false;
    },
    addTask(task: Omit<Task, "id">) {
      this.tasks.push({ ...task, id: this.tasks.length + 1 });
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });
    },
    deleteTask(id: number) {
      this.tasks = this.tasks.filter((t) => t.id !== id);
      fetch(`${url}/${id}`, {
        method: "DELETE",
      });
    },
    favTask(id: number) {
      const task = this.tasks.find((t) => t.id === id);
      if (task) {
        task.fav = !task.fav;
        fetch(`${url}/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ fav: task?.fav }),
        });
      }
    },
  },
});
