<template>
<div>
      <section>
          <v-parallax src="https://www.jobtutorhome.com/static/images/banner-01.jpg" height="400">
            <v-layout
              column
              align-center
              justify-center
              class="white--text"
            >
            
              <h1 class="white--text mb-2 display-1 text-xs-center">Parallax Template</h1>
              <div class="subheading mb-3 text-xs-center">Powered by Vuetify</div>
              <v-btn
                class="blue lighten-2 mt-5"
                dark
                large
                href="/pre-made-themes"
              >
                Get Started
              </v-btn>
            </v-layout>
          </v-parallax>
        </section>
     

  <v-container>
    <v-layout row wrap>
        <v-flex xs12 sm6 class="text-xs-center text-sm-right">
        <v-btn large router to="/register" class="info">สมัครเรียน</v-btn>
      </v-flex>
        <v-flex xs12 sm6 class="text-xs-center text-sm-left">
        <v-btn large router to="/board" class="info">ดูงาน</v-btn>
      </v-flex>
     
    </v-layout>
    
  </v-container>
</div>
</template>

<script>
  export default {
    computed: {
      meetups () {
        return this.$store.getters.featuredMeetups
      },
      loading () {
        return this.$store.getters.loading
      }
    },
    methods: {
      onLoadMeetup (id) {
        this.$router.push('/meetups/' + id)
      }
    }
  }
</script>

<style scoped>
  .title {
    position: absolute;
    bottom: 50px;
    background-color: rgba(0,0,0,0.5);
    color: white;
    font-size: 2em;
    padding: 20px;
  }
</style>
