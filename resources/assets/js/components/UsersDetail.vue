<template>
    <div>
        <div class="panel panel-default">
            <div class="panel-heading">
                <h2>Nombre: {{ user.name }}.</h2>
            </div>
            <div class="panel-body">
                <p>Correo electrónico: {{ user.email }}.</p>
                <p v-if="user.is_admin">Tipo de usuario: Administrador.</p>
                <p v-else>Tipo de usuario: Usuario.</p>
                <a href="" class="btn btn-dark" @click.prevent="back">VOLVER</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['user'],

    methods: {
        back: function(){
            this.$emit('show_detail', null);
        }
    }
}
</script>