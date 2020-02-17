<template>
    <div>
        <div class="panel panel-default">
            <div class="panel-heading">
                <h1>USUARIO NUEVO.</h1>
            </div>
            <div class="panel-body mt-5">
                <div class="alert alert-success" v-if="saved">
                    <p class="font-weight-bold text-center">¡Usuarios guardado con éxito!</p>
                </div>
                <form action="" class="form-horizontal" method="post" @submit.prevent="saveUser">
                    <div class="form-group">
                        <label for="">Nombre</label>
                        <input type="text" class="form-control input-sm" placeholder="Nombre Apellido Apellido" v-model="user.name">
                    </div>
                    <div class="form-group">
                        <label for="">Correo electrónico</label>
                        <input type="text" class="form-control input-sm" placeholder="example@example.com" v-model="user.email">
                    </div>
                    <div class="form-group">
                        <label for="">Contraseña</label>
                        <input type="password" class="form-control input-sm" v-model="user.password">
                    </div>
                    <div class="form-group">
                        <label for="">¿Usuario administrador?</label>
                        <div class="form-check">
                            <input type="radio" class="form-check-input" name="type" value="y" v-model="user.is_admin">
                            <label for="" class="form-check-label">SÍ</label>
                        </div>
                        <div class="form-check">
                            <input type="radio" class="form-check-input" name="type" value="n" v-model="user.is_admin">
                            <label for="" class="form-check-label">NO</label>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary mt-2">GUARDAR</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            errors: [],
            saved: false,
            is_admin: {'y': true, 'n': false},
            user: {
                name: null,
                email: null,
                password: null,
                is_admin: null
            },
            config: {},
        }
    },

    mounted(){
        this.config = {
            headers: {
                "Authorization": "Basic " + localStorage.getItem('auth_token'),
            }
        };
    },

    methods: {
        saveUser: function(){
            this.saved = false;

            this.user.is_admin = this.is_admin[this.user.is_admin];

            axios.post('api/users', this.user, this.config).then(({data}) => this.setSuccess()).catch(({response}) => this.setError(response));
        },

        setError(response){
            this.errors = response.data.errors;
            console.log(this.errors);
        },

        setSuccess(){
            this.reset();
            this.saved = true;
        },

        reset(){
            this.errors = [];
            this.user = {name: null, email: null, password: null, is_admin: null};
        }
    }
}
</script>