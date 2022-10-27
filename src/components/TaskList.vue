<template>
    <p v-if="taskStore.loading">loading ...</p>
    <p v-if="taskStore.error">{{ taskStore.error }} </p>
    <div class="task-list flex flex-col">
        <div>
            <label for="default-toggle" class="inline-flex relative items-center cursor-pointer">
                <input type="checkbox" id="default-toggle" class="sr-only peer" v-model="showAll">
                <div
                    class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                </div>
                <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">All</span>
            </label>
        </div>
        <div v-if="showAll" class="tasks">
            <p>
                you have {{ taskStore.totalCount }} tasks
            </p>
            <TransitionGroup name="list">
                <TaskItem v-for="task in taskStore.tasks" :key="task.id" :task="task" />
            </TransitionGroup>
        </div>
        <div v-else class="tasks">
            <p>
                you have {{ taskStore.favCount }} fav tasks
            </p>
            <TransitionGroup name="list">
                <TaskItem v-for="task in taskStore.favs" :key="task.id" :task="task" />
            </TransitionGroup>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useTaskStore } from "../stores/TaskStore";
import TaskItem from './TaskItem.vue';
const taskStore = useTaskStore()

onMounted(() => {
    taskStore.getTasks()
})

const showAll = ref<boolean>(true)
</script>

<style scoped>

</style>