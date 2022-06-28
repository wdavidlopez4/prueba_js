<template>
  <div>
    <div class="center">

    <div class="card" v-for="usuario in this.usuarios" :key="usuario.id">

      <div class="additional">
        <div class="user-card">
          <div class="round">{{usuario.login}}</div>
          <div class="level">{{usuario.url}}</div>
          <div class="points">{{usuario.type}}</div>
        </div>

        <div class="more-info">
          <h1>{{usuario.login}}</h1>
        </div>

        <div class="coords">
          <span>{{usuario.login}}</span>
          <span>{{usuario.type}}</span>
        </div>
        <div class="coords center">
          <a href=""></a>
        </div>

        <div class="stats">
          <div></div>
          <i></i>
          <div class="title">{{usuario.site_admin}}</div>
          <div class="value">{{usuario.received_events_url}}</div>
          <div class="value infinity">{{usuario.received_events_url}}</div>
        </div>
      </div>
    </div>

  </div>
  </div>
</template>

<script>
export default {
    name: 'Usuario',

    props: {
        usuarios: {
        type: Array
      }
    }
}
</script>

<style>

</style>