<template>
  <div>
    <div class="finder">
      <div>
        <h1>Find GitHup User</h1>
      </div>
    
      <div class="pseudo-search">
        <input type="text" id="exampleInputEmail1" v-model="filterName">
        <button 
          type="submit"
          @click="consultarUsuario">
          <i class="bi bi-search"></i>
          <i class="bi bi-github"></i>
        </button>
      </div>
    </div>

    <Usuario 
      :usuarios="this.usuarios"
      v-if="verificarUsuarios == true">
    </Usuario>

    <SinDatos v-else></SinDatos>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Usuario from '@/components/Contacto/Usuario.vue'
import SinDatos from '@/components/Contacto/SinDatos'

export default {
    name: 'Buscador',

    components: {
        Usuario,
        SinDatos
    },

    data() {
        return {
          usuario: {
                login: "",
                id: 0,
                avatar_url: "",
                url: "",
                type: "",
                site_admin: false,
                received_events_url: ""
            },
            usuarios:[],
            filterName: ""
        };
    },

    methods: {
        ...mapActions(["QueryUserAction"]),

        async consultarUsuario() {
            var informacionUsuario = await this.QueryUserAction({filterName: this.filterName});
            console.log(informacionUsuario)
            this.usuario.login = informacionUsuario.login;
            this.usuario.id = informacionUsuario.id;
            this.usuario.avatar_url = informacionUsuario.avatar_url;
            this.usuario.type = informacionUsuario.type;
            this.usuario.site_admin = informacionUsuario.site_admin;
            this.usuario.received_events_url = informacionUsuario.received_events_url

            this.usuarios.push(this.usuario);
        },
    },

    computed:{
      verificarUsuarios(){
        console.log(this.usuarios)
        if(this.usuarios == null || this.usuarios == [] || this.usuarios.length <= 0){
          return false;
        }
        else{
          return true;
        }
      }
    }
}
</script>

<style>

</style>