<template>
  <div>
    <v-container>
      <v-row justify="space-around">
        <v-card max-width="344" class="m-4">
          <v-img
            height="200px"
            src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
          >
          </v-img>
          <div class="font-weight-bold ml-8 mb-2 mt-3">{{CoursesProp.name}}</div>

          <v-card-text>
            <div class="font-weight-bold ml-8 mb-2">Información</div>

            <v-timeline align-top dense>
              <v-timeline-item
                v-for="message in CoursesProp"
                :key="message.time"
                color="orange lighten-4"
                small
              >
                <div>
                  <div class="font-weight-normal">
                    <strong>{{ CoursesProp.price }}</strong>
                  </div>
                  <div>{{ CoursesProp.duration }}</div>
                  <div class="font-weight-normal">
                    <strong>{{ CoursesProp.number_course }}</strong>
                  </div>
                  <div>{{ CoursesProp.completed }}</div>
                  <div class="font-weight-normal">
                    <strong>Fecha de Registro</strong>
                  </div>
                  <div>{{ CoursesProp.register }}</div>
                </div>
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
        </v-card>
      </v-row>
    </v-container>
  </div>
</template>>

<script>
export default {
  props: ["CoursesProp"],
};
</script>

<style scoped>


.v-card {
  margin: 0 auto;
}
</style>