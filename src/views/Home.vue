<template>
    <v-container class="course">
        <h1 class="mb-5 text-center">Lista de cursos</h1>
        <v-row>
            <v-col cols="4" v-for="(course, index) in courses" :key="index">
                <v-card max-width="344" class="cards">
                    <v-img
                    height="200px"
                    src="https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png"
                    >
                    </v-img>
                    <div class="font-weight-bold ml-8 mb-2 mt-3">
                        {{courses1.name}} 
                    </div>

                    <v-card-text>
                        <div class="font-weight-bold ml-8 mb-2">
                            Información
                        </div>

                        <v-timeline
                            align-top
                            dense
                        >
                            <v-timeline-item
                            v-for="message in messages"
                            :key="message.time"
                            :color="message.color"
                            small
                            >
                            <div>
                                <div class="font-weight-normal">
                                <strong>{{ message.from }}</strong> @{{ message.time }}
                                </div>
                                <div>{{ message.message }}</div>
                            </div>
                            </v-timeline-item>
                        </v-timeline>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    data(){
        return{
        "messages": [
                        {
                        from: 'You',
                        message: `Sure, I'll see you later.`,
                        time: '10:42am',
                        color: 'deep-purple lighten-1',
                        },
                        {
                        from: 'John Doe',
                        message: 'Yeah, sure. Does 1:00pm work?',
                        time: '10:37am',
                        color: 'green',
                        },
                        {
                        from: 'You',
                        message: 'Did you still want to grab lunch today?',
                        time: '9:47am',
                        color: 'deep-purple lighten-1',
                        },
                    ],
        "courses": [1,2,3,4,5]
        }
    },
    created(){
        this.$store.dispatch('getData');
    },

    computed:{
        courses1(){
            return this.$store.state.courses;
        }
    }
        
    
}
</script>

<style scoped>
.v-card{
    margin: 0 auto;
}
.course {
  margin-top: 5rem;
}
.cards{
background: rgba( 255, 255, 255, 0.1 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 7.5px );
-webkit-backdrop-filter: blur( 7.5px );
border-radius: 10px;
}
</style>