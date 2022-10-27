<template>
    <div class="task-item text-gray-200 flex justify-between min-w-40 max-w-3xl m-auto">
        <h2>
            {{ task.title }}
        </h2>
        <div class="icons">
            <button :class="{ fav: task.fav }" @click="handleFav()">
                <i class="material-icons">favorite</i>
            </button>
            <button>
                <i class="material-icons" @click="handleDelete()">delete</i>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Task } from '../models/task';
import { useTaskStore } from '../stores/TaskStore';
const taskStore = useTaskStore()
const props = defineProps<{ task: Task }>()

const handleFav = () => {
    taskStore.favTask(props.task.id)
}

const handleDelete = () => {
    taskStore.deleteTask(props.task.id)
}
</script>


<style scoped>
.fav {
    color: purple;
}
</style>