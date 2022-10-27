<template>
    <h1 class="text-white text-2xl my-10">Add new task</h1>
    <form @submit.prevent="handleSubmit" class="max-w-sm m-auto">
        <div class="mb-6">
            <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Title</label>
            <input type="text" id="title" v-model="title"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="task title" required>
        </div>
        <div class="flex items-start mb-6">
            <div class="flex items-center h-5">
                <input id="fav" type="checkbox" value=""
                    class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                    v-model="fav">
            </div>
            <label for="fav" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Is
                Favourite</label>
        </div>
        <button type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useTaskStore } from '../stores/TaskStore';
const taskStore = useTaskStore()

const title = ref<string>('');
const fav = ref<boolean>(false);
const handleSubmit = () => {
    if (title.value.length > 0) {
        taskStore.addTask({ title: title.value, fav: fav.value });
    }
}
</script>

<style scoped>

</style>