import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';

const app = createApp(App);

const router = createApp({
  history: createWebHistory(),
  routes: [], // we have to tell the router which vue component should be loaded for shich URL
});

app.mount('#app');
