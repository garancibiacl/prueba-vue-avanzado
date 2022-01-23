<template>
  <div>
    <v-system-bar color="deep-purple darken-3"></v-system-bar>
    <v-app-bar>
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        color="deep-purple accent-4"
        dark
        prominent
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="font-weight-black text-uppercase"
        >Cursos alfa web</v-toolbar-title
      >
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn>
          <v-btn icon>
            <v-icon>mdi-home-outline</v-icon>
          </v-btn>
          Inicio</v-btn
        >
        <v-btn>
          <v-icon>mdi-cog-outline</v-icon>
              <router-link to="/admin" class="enlace-nav"
                >  Administración</router-link></v-btn
        >
        <v-btn>
          <v-icon>mdi-clipboard-list-outline</v-icon>
            <router-link to="/home" class="enlace-nav"
         >  Lista de curso</router-link></v-btn
        >
      </v-toolbar-items>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      left
      temporary
      color="deep-purple accent-4"
      dark
      prominent
    >
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item>
            <v-list-item-title>
              <v-icon>mdi-home-outline</v-icon>
              Inicio</v-list-item-title
            >
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <v-icon>mdi-cog-outline</v-icon>
              <router-link to="/admin" class="enlace"
                >  Administración</router-link
              ></v-list-item-title
            >
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
              <v-icon>mdi-clipboard-list-outline</v-icon>
              <router-link to="/home" class="enlace">  Lista de curso</router-link>
            </v-list-item-title
            >
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  data: () => ({
    drawer: false, // Se crea condicion drawer
  }),
};
</script>

<style scoped>
.enlace {
  color: white;
  text-decoration: none;
}
.enlace-nav{
  color:  rgba(0, 0, 0, 0.87);
  text-decoration: none;
}
.back {
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(247, 247, 247, 1) 50%,
    rgba(245, 245, 245, 1) 100%
  );
}
</style>

