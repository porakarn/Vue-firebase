<template>
<div> 
     
         
  
 <v-card-media class="hidden-xs-only"  src="http://35.226.232.90/wp-content/uploads/2018/01/sornsl.jpg" height="600px">
 </v-card-media>
 <v-card-media class="hidden-md-and-up"  src="http://35.226.232.90/wp-content/uploads/2018/01/sornsl.jpg" height="200px">
 </v-card-media>
  
   <v-container>
<v-tabs fixed icons centered>
    <v-tabs-bar dark class="white">
      <v-tabs-slider class="yellow"></v-tabs-slider>
      <v-tabs-item href="#tab-1">
        <v-icon>phone</v-icon>
        สมัครติวเตอร์
      </v-tabs-item>
      <v-tabs-item href="#tab-2">
        <v-icon>favorite</v-icon>
        จองงาน
      </v-tabs-item>
      <v-tabs-item href="#tab-3">
        <v-icon>account_box</v-icon>
        ดูเอกสาร
      </v-tabs-item>
     
    </v-tabs-bar>
    <v-tabs-items>
      <v-tabs-content
        v-for="i in 3"
        :key="i"
        :id="'tab-' + i"
      >
      
      </v-tabs-content>
    </v-tabs-items>
  </v-tabs>
  <br>
  <v-tabs fixed icons centered>
    <v-tabs-bar dark class="white">
      <v-tabs-slider class="yellow"></v-tabs-slider>
      <v-tabs-item href="#tab-1">
        <v-icon>phone</v-icon>
        สมัครติวเตอร์
      </v-tabs-item>
      <v-tabs-item href="#tab-2">
        <v-icon>favorite</v-icon>
        จองงาน
      </v-tabs-item>
      <v-tabs-item href="#tab-3">
        <v-icon>account_box</v-icon>
        ดูเอกสาร
      </v-tabs-item>
     
    </v-tabs-bar>
    <v-tabs-items>
      <v-tabs-content
        v-for="i in 3"
        :key="i"
        :id="'tab-' + i"
      >
      
      </v-tabs-content>
    </v-tabs-items>
  </v-tabs>
 <br>
<v-tabs fixed icons centered>
    <v-tabs-bar dark class="white">
      <v-tabs-slider class="yellow"></v-tabs-slider>
      <v-tabs-item href="#tab-1">
        <v-icon>phone</v-icon>
        สมัครติวเตอร์
      </v-tabs-item>
      <v-tabs-item href="#tab-2">
        <v-icon>favorite</v-icon>
        จองงาน
      </v-tabs-item>
      <v-tabs-item href="#tab-3">
        <v-icon>account_box</v-icon>
        ดูเอกสาร
      </v-tabs-item>
     
    </v-tabs-bar>
    <v-tabs-items>
      <v-tabs-content
        v-for="i in 3"
        :key="i"
        :id="'tab-' + i"
      >
      
      </v-tabs-content>
    </v-tabs-items>
  </v-tabs>


<br> <br><br> <br> <br>
    <v-layout row wrap>
        <v-flex xs12 sm4 class="text-xs-center text-sm-right">
        <v-btn large router to="/register" class="info">สมัครเรียน</v-btn>
      </v-flex>
        <v-flex xs12 sm4 class="text-xs-center text-sm-left">
             <v-btn large router to="/sheet" class="info">เอกสารการสอน</v-btn>
        <v-btn large router to="/board" class="info">ดูงาน</v-btn>
       
      </v-flex>
    
    </v-layout>
    
  </v-container>
</div>
</template>

<script>
  export default {
     data () {
      return {
        items: [
          {
            src: 'http://35.226.232.90/wp-content/uploads/2018/01/sornsl.jpg'
          },
          {
            src: 'http://35.226.232.90/wp-content/uploads/2018/01/sornsl.jpg'
          }
        
        ]
      }
    },
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
