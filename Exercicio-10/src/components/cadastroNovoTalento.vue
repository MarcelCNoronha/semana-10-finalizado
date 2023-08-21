<template>
  <v-form ref="form" class="d-flex flex-column align-center">
    <h2 class="ma-3 text-center">Cadastro de talento</h2>

    <v-text-field
      label="Nome completo"
      class="w-50 px-2"
      v-model="nome"
      :rules="[(v) => !!v || 'O nome é obrigatório!']"
      required
    ></v-text-field>

    <v-text-field
      label="Email"
      class="w-50 px-2"
      type="email"
      v-model="email"
      :rules="[(v) => !!v || 'O e-mail é obrigatório!']"
      required
    ></v-text-field>

    <v-text-field
      label="Data de nascimento"
      class="w-50 px-2"
      type="date"
      v-model="dataNascimento"
      :rules="[(v) => !!v || 'A data de nascimento é obrigatório!']"
      required
    ></v-text-field>

    <v-text-field
      label="WhatsApp"
      class="w-50 px-2"
      type="tel"
      v-model="whatsapp"
      :rules="[(v) => !!v || 'O WhatsApp é obrigatório!']"
      required
    ></v-text-field>

    <div class="mb-3 w-50">
      <v-select 
      label="Área de Interesse"
      class="form-select"
      v-model="areaInteresse"
      :items="['Front end', 'Back end', 'Full stack']"
      ></v-select>
    </div>
 

      <div class="mb-3 w-50">
      <v-select 
      label="Nível Profissional"
      class="form-select"
      v-model="nivelProfissional"
      :items="['Trainee', 'Junior', 'Pleno', 'Senior']"
      > </v-select>
      </div>
     

    <div class="d-flex flex-row">
      <v-checkbox
      v-model="habilidades"
      value="html"
      label="HTML"
    ></v-checkbox>
    <v-checkbox
      v-model="habilidades"
      value="css"
      label="CSS3"
    ></v-checkbox>
    <v-checkbox
      v-model="habilidades"
      value="js"
      label="JavaScript"
    ></v-checkbox>
    <v-checkbox
      v-model="habilidades"
      value="react"
      label="React"
    ></v-checkbox>
    <v-checkbox
      v-model="habilidades"
      value="react-native"
      label="React Native"
    ></v-checkbox>
    <v-checkbox
      v-model="habilidades"
      value="node"
      label="Node"
    ></v-checkbox>
    </div>
    

    <v-textarea
      label="Carta de apresentação"
      v-model="cartaApresentacao"
      cols="100"
      rows="5"
    ></v-textarea>

    <v-btn
      color="success"
      class="mt-1 me-2"
      size="large"
      @click="adicionarTalento"
    >Cadastrar</v-btn>
  </v-form>
</template>


<script>
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

export default {
  data() {
    return {
      nome: "",
      email: "",
      dataNascimento: "",
      whatsapp: "",
      areaInteresse: "",
      nivelProfissional: "",
      habilidades: [],
      cartaApresentacao: "",
    };
  },
  methods: {
    async adicionarTalento() {
      const { valid } = await this.$refs.form.validate();

      if (!valid) {
        alert("Preencha todos os campos");
        return;
      }

      const novoTalento = {
        id: uuidv4(),
        nome: this.nome,
        email: this.email,
        dataNascimento: this.dataNascimento,
        whatsapp: this.whatsapp,
        areaInteresse: this.areaInteresse,
        nivelProfissional: this.nivelProfissional,
        habilidades: this.habilidades,
        cartaApresentacao: this.cartaApresentacao,
      };

      try {
        await axios.post("http://localhost:50001/talentos", novoTalento);
      } catch (erro) {
        console.log(erro);
      }
    },
  },
};
</script>

<style scoped></style>
