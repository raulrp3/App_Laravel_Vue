<template>
    <div>
        <ul class="list-group mt-3 mb-5">
            <li v-for="user in users" v-bind:key="user.id" class="list-group-item d-flex justify-content-between align-content-center px-5">
                <p>{{ user.name}}</p>
                <a href="" class="btn btn-dark">VER DETALLE</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            users: []
        };
    },

    created() {
        axios.get('api/users').then(({data}) => {
            this.users = data.data;
        });
    }
}
</script>