<template>
    <div>
        <input type="text" class="form-control my-3" placeholder="BUSCAR USUARIO" v-model="search">
        <ul class="list-group mt-3 mb-5">
            <li v-for="user in filteredUsers" v-bind:key="user.id" class="list-group-item d-flex justify-content-between align-content-center px-5">
                <p>{{ user.name }}</p>
                <div>
                    <a href="" class="btn btn-dark" @click.prevent="showDetail(user)">VER DETALLE</a>
                    <a href="" class="btn btn-danger ml-2" @click.prevent="remove(user.id)">ELIMINAR</a>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            users: [],
            search: '',
            config: {}
        };
    },

    mounted(){
        this.config = {
            headers: {
                "Authorization": "Basic " + localStorage.getItem('auth_token'),
            }
        };
    },

    created() {
        axios.get('api/users', this.config).then(({data}) => {
            this.users = data.data;
        });
    },

    methods: {
        showDetail: function(user){
            this.$emit('show_detail', user);
        },
        remove: function(id){
            axios.delete('api/users/' + id, this.config).then(() =>{
                this.users = _.remove(this.users, function(user){
                    return user.id != id;
                });
            });
        }
    },

    computed: {
        filteredUsers: function(){
            return this.users.filter((user) => {
                return user.name.toLowerCase().match(this.search);
            });
        }
    }
}
</script>