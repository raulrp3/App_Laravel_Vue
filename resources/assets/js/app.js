
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));

Vue.component('users-view', require('./components/UsersView.vue'));
Vue.component('users-all', require('./components/UsersAll.vue'));
Vue.component('users-detail', require('./components/UsersDetail.vue'));
Vue.component('users-new', require('./components/UsersNew.vue'));

const app = new Vue({
    el: '#app'
});
