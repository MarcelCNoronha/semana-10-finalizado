<template>
  <header>
     <div class="d-flex flex-column align-center ma-2">
    
      <div class="d-flex flex-row">
        <img class="col-1" src="../assets/logo.svg" alt="" :width="50" />
        <h2 class="col-11">Exercicio Semana 10</h2>
      </div>

      <div class="d-flex flex-row ma-2">
        <div class="ma-3">
          <House class="mx-2" />
          <a href="./">Home
          </a>
        </div>

        <div class="ma-3">
          <Folder class="mx-2" />
          <a href="./cadastro">Talentos
          </a>
        </div>

        <div class="ma-3">
          <Pin class="mx-2" />
          <a href="./sobre">Sobre
          </a>
        </div>
      </div>
    
  </div>
</header>
</template>

<script>
import House from "./icons/House.vue";
import Folder from "./icons/Folder.vue";
import Pin from "./icons/Pin.vue";

export default {
  components: {
    House,
    Folder,
    Pin,
  },
};
</script>

<style scoped>
a {
  color: black;
  text-decoration: none;
}
</style>
