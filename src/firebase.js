import { initializeApp } from "firebase/app";
import firebaseConfig from "./config.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "firebase/auth";

initializeApp(firebaseConfig);

const auth = getAuth();// Se inicializa el modulo de autenticacion

// Registrar usuario
const registrarUsuario = (email, password, callback) => {  // Funcion que se llama registrarUsuario
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);

      callback();
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);

      // Aca podemos agregar un callback para error
    });
};

// Login
const login = (email, password, callback) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);

      callback(errorCode);
    });
};

// Logout
const logout = () => {
  signOut(auth)
    .then((user) => {
      console.log(user);
    })
    .catch((error) => {
      console.log(error);
    });
};

// Observador

// Problema: Solo podemos entrar a home si estamos logeados y solo podemos entrar
// a login si no lo estamos
const observador = (to, next) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // Aca entra cuando esta logeado
      if (to.path === "/login") {
        next("/"); //redirige
      } else {
        next(); //Entra (en este caso al HOME)
      }
    } else {
      // Aca cuando no
      if (to.path !== "/login") {
        next("/login");
      } else {
        next(); // En este caso entra al login
      }
    }
  });
};

export { registrarUsuario, login, logout, observador };
