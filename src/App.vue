<script setup lang="ts">
import TaskForm from './components/TaskForm.vue';
import TaskList from './components/TaskList.vue';
</script>

<template>
  <main>
    <header class="flex justify-center my-5">
      <h1 class="font-extrabold text-3xl underline">Pinia tasks</h1>
    </header>

    <TaskList></TaskList>
    <TaskForm></TaskForm>
  </main>
</template>

<style scoped>
.tasks {
  max-width: 400px;
  margin: 0 auto;
}
</style>