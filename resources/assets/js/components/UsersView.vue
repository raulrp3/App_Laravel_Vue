<template>
    <div>
       <div class="panel panel-default">
           <div class="panel-heading d-flex justify-content-between align-items-center">
               <div>
                   <h1>USUARIOS.</h1>
               </div>
               <div>
                   <a href="/user" class="btn btn-primary">CREAR USUARIO</a>
               </div>
           </div>
           <div class="panel-body">
               <div v-if="!user">
                   <users-all @show_detail="showDetail"></users-all>
               </div>
               <div v-else>
                   <users-detail :user="user" @show_detail="showDetail"></users-detail>
               </div>
           </div>
       </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: null
        };
    },

    methods: {
        showDetail: function(user){
            this.user = user;
        }
    }
}
</script>