<template>
    <div>
       <div class="panel panel-default">
           <div class="panel-heading d-flex justify-content-between align-items-center">
               <div>
                   <h1>USUARIOS.</h1>
               </div>
               <div>
                   <a href="#" class="btn btn-primary">CREAR USUARIO</a>
               </div>
           </div>
           <div class="panel-body">
               <div v-if="!detail">
                   <users-all></users-all>
               </div>
               <div v-else>
                   <users-detail></users-detail>
               </div>
           </div>
       </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            detail: false
        };
    }
}
</script>