<template>
  <div>
    <CadastroNovoTalento @cadastrar="AdicionarTalento" />
  </div>
</template>

<script>
import CadastroNovoTalento from "../components/cadastroNovoTalento.vue";
export default {
  components: {
    CadastroNovoTalento
},
  
}
</script>