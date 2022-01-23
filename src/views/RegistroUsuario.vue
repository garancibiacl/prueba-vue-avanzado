<template>
  <v-container class="login">
    <v-row>
            <v-col cols="12"  class="col-md-1 text-center">
        <!-- <img src="../assets/student.png" alt="" /> -->
      </v-col>
      <v-col cols="12" md="6" class="text-center">
        <h1 class="display-2 mb-3">¡Bienvenido!</h1>
        <p mb-5>Crea tu cuenta aquí</p>
        <p class="text-center pt-3">{{ msg }}</p>
        <v-form ref="form" v-model="valid" lazy-validation class="form">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>

          <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Password"
            hint="Ingrese su contraseña de 6 caracteres" 
            counter
            @click:append="show1 = !show1"
          ></v-text-field>


          <v-btn
            elevation="2"
            color="success"
            class="mr-4 mt-5"
            @click="register"
          >
            Registrar Usuario
          </v-btn>

          <v-btn color="error" class="mr-4 mt-5" @click="reset">
            Limpiar Formulario
          </v-btn>

          <v-btn color="warning" class="mr-4 mt-5" >
            Limpiar Validación
          </v-btn>
        </v-form>
         <v-banner single-line class="mt-3"></v-banner>
        <div class="container-fluid mt-2">
          <router-link to="/">Volver al login</router-link>
        </div>
      </v-col>
      <v-col cols="12" md="6" class="text-center">
        <!-- <img src="../assets/students.png" alt="" /> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { registrarUsuario } from "../firebase.js";
export default {
  data() {
    return {
      show1: false,
      password: "",
      email: "",
      msg: "",
    };
  },

  methods: {
    reset() {
      this.name = "";
      this.email = "";
    },

    registerUser(error){
      switch(error){
        
        case "auth/invalid-email":
            alert("El email no es valido");
          // this.msg = "El email no es valido";
          break;
        case "auth/email-already-in-use":
          this.msg = "El email ya esta en uso";
          break;
        case "auth/weak-password":
          this.msg = "El password es muy debil";
          break;
        case "auth/internal-error":
          this.msg = "Error desconocido";
          break;
      }
      alert("Usuario registrado con éxito");
      this.email = "";
      this.password = "";



      setTimeout(() => {
        this.msg = "";
      }, 3000);
    },
    register() {
      registrarUsuario(
        this.email,
        this.password,
        this.registerUser
      );
    },
  },
};
</script>

<style scoped>
.row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.login {
  width: 90%;
  margin-top: 10rem;
}
img {
  width: 100%;
  display: block;
  margin: 0 auto;
}
</style>