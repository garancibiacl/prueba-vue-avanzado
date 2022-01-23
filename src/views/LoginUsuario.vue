<template>
  <v-container class="login">
    <v-row>
      <v-col cols="12" class="text-center">
        <!-- <img src="../assets/student.png" alt="" /> -->
      </v-col>
      <v-col cols="12" md="6" class="text-center">
        <h1 class="display-1 mb-5">Login de Usuario</h1>
        <p class="text-center pt-3">{{ msg }}</p>
        <v-alert :value="alert" shaped text type="error">{{ msg }}</v-alert>
        <v-form ref="form" lazy-validation class="form">
          <v-text-field v-model="email" label="E-mail" required></v-text-field>

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
            @click="loginUser"
          >
            Iniciar Sesión
          </v-btn>

          <v-btn color="error" class="mr-4 mt-5"> Limpiar Formulario </v-btn>

          <v-btn color="warning" class="mr-4 mt-5" @click="clear">
            Limpiar Validación
          </v-btn>
        </v-form>
        <v-banner single-line class="mt-4"></v-banner>
        <div class="container-fluid">
          <p class="mt-4">¿Aún no tienes cuenta?</p>
          <router-link to="/registro">Registrarse</router-link>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { login } from "../firebase.js";
export default {
  data() {
    return {
      alert: false,
      show1: false,
      msg: "",
      email: "",
      password: "",
    };
  },

  methods: {
    clear() {
      // metodo limpiar formulario
      this.password = "";
      this.email = "";
    },

    loginIncorrecto(error) {
      switch (error) {
        case "auth/invalid-email":
          this.msg = "El email es incorrecto";
          break;
        case "auth/wrong-password":
          this.msg = "La contraseña es incorrecta";
          break;
      }

      if (error === "auth/invalid-email") {
        const Swal = require("sweetalert2");
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Correo incorrecto!",
          confirmButtonText: "Reintentar",
        }); // se crea alerta eliminar post
      }

      if (error === "auth/wrong-password") {
        alert("Contraseña incorrecta");
      }

      setTimeout(() => {
        this.msg = "";
        this.alert = false;
      }, 3000);
    },

    saveEmail(email) {
      this.$store.commit("setEmail", email);
    },

    loginUser() {
      login(this.email, this.password, this.loginIncorrecto, this.saveEmail);
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
  width: 70%;
  margin-top: 10rem;
}
img {
  width: 80%;
  display: block;
  margin: 0 auto;
}
</style>