import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';
const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    {
      name: 'teams',
      path: '/teams',
      components: { default: TeamsList, footer: TeamsFooter },
      children: [
        // nested routing so no need to write '/teams/
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true,
        }, // localhost:8080/teams/t1
      ],
    },
    { path: '/users', components: { default: UsersList, footer: UsersFooter } },

    { path: '/:notFound(.*)', component: NotFound }, // default (unnamed) router view
  ],
  linkActiveClass: 'active',
});
app.use(router);
app.mount('#app');
