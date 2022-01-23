<template>
  <div>
    <v-row justify="center" class="curso">  
    <v-col cols="12" sm="10" md="8" lg="6">
      <div>
        <h1 class="display-1 pb-5" >Agregando Curso</h1>
      </div>
      <v-card ref="form">
        <v-card-text>
          <v-text-field
            counter="40"
            v-model="create.name"
            label="Nombre"
          ></v-text-field>
          <v-text-field
            ref="image"
            v-model="create.image"
            placeholder="URL de la imagen del curso"
          ></v-text-field>
          <v-text-field
            type="number"
            step="any"
            min="0"
            ref="input"
            label="Cupos del curso"
            v-model="create.number_course"
          ></v-text-field>
          <v-text-field
            type="number"
            step="any"
            min="0"
            ref="input"
            label="Inscritos en el curso"
            v-model="create.number_signup"
          ></v-text-field>
          <v-text-field
            
            v-model="create.duration"
            label="Duración"
          ></v-text-field>
          <v-text-field
            type="number"
            step="any"
            min="0"
            ref="input"
            label="Costo"
            v-model="create.price"
          ></v-text-field>
          <v-textarea
            outlined
            label="Descripción del curso"
            v-model="create.description"
          ></v-textarea>
        </v-card-text>
        <v-divider class="mt-2"></v-divider>
          <div class="buttons">
            <v-btn
            elevation="2"
            color="success"
            class="mr-4 mt-5"
            @click="createCourse"
          >
            Crear Curso
          </v-btn>

          <v-btn color="error" class="mr-4 mt-5" >
            Limpiar Formulario
          </v-btn>

          <v-btn color="warning" class="mr-4 mt-5" @click="clear"> Limpiar Validación </v-btn>
          </div>

      </v-card>
    </v-col>
  </v-row>

  </div>

</template>
<script>

// import { addData} from '../firebase/firebase.js'

export default {
  data() {
    return {
      create: {
        name: "",
        image: "",
        number_course: "",
        number_signup: "",
        duration: "",
        price: "",
        description: "",
      },
    };
  },

  methods: {
   clear() {
      this.create.name = ''
      this.create.image = ''
      this.create.number_course = ''
      this.create.number_signup = ''
      this.create.duration = ''
      this.create.price = ''
      this.create.description = ''
    },

  //   createCourseCallback(){
  //     alert('Curso creado con exito')
  //     this.create.name = ''
  //     this.create.image = ''
  //     this.create.number_course = ''
  //     this.create.number_signup = ''
  //     this.create.duration = ''
  //     this.create.price = ''
  //     this.create.description = ''

  //   },

  //   createCourse(){
  //     addData(this.create, this.createCourseCallback)
  //   }
  },
};
</script>

<style>
.curso {
  margin-top: 5rem;
}

.buttons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}
</style>