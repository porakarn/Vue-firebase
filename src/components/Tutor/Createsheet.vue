<template>
  <v-container>


<br>
      
    <v-layout row>
        
      <v-flex xs12 sm6 offset-sm3>
        <h5>Submit เอกสารการสอน</h5>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
      <form @submit.prevent="onCreateMeetup">
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="url"
                label="Google Doc URL"
                id="url"
                v-model="Course.url"
                required></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs6 sm3 offset-sm3>
              <v-text-field
                name="filename"
                label="File name"
                id="filename"
                v-model="Course.filename"
                required></v-text-field>
            </v-flex>
            <v-flex xs6 sm3 >
              <v-text-field
                name="name"
                label="Creator Name"
                id="name"
                v-model="Course.name"
                required></v-text-field>
            </v-flex>
          </v-layout>
           <v-layout row>
                <v-flex xs6 sm2 offset-sm3>
            <v-select
              v-bind:items="bitems"
              v-model="select2"
              label="วิชา"
              single-line
              item-text="subject"
              item-value="subject"
              return-object
              :hint="`${select2.subject}`"
              persistent-hint
              required
            ></v-select>
                </v-flex>
          
  <v-flex xs6 sm2 offset-sm1 >
            <v-select
              v-bind:items="citems"
              v-model="select3"
              label="ระดับชั้น"
              single-line
              item-text="grade"
              item-value="grade"
              return-object
              :hint="`${select3.grade}`"
              persistent-hint
                required
            ></v-select>
          </v-flex>
        
          </v-layout>
         
        
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-btn
                class="primary"
             
                type="submit" >เรียบร้อย </v-btn>
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
  </v-container>




</template>


<script>
import axios from 'axios';
      export default {
    data () {
      return {
           select2: { subject: ''},
        bitems: [
          { subject: 'คณิต'},
          { subject: 'อังกฤษ'},
          { subject: 'วิทยาศาสตร์'},
          { subject: 'ไทย'},
          { subject: 'ภาษาต่างๆ'},
          { subject: 'อื่นๆ'},
        
        ],
          select3: { grade: ''},
        citems: [
          { grade: 'มหาลัย'},
          { grade: 'มัธยมปลาย'},
          { grade: 'มัธยมต้น'},
          { grade: 'ประถม'},
          { grade: 'อนุบาล'},
          { grade: 'อื่นๆ'}
        
        ],
           
          Course: { 
        url: '',
        filename: '',
        name: ''
              }
        
    
      }
    },
    computed: {
               formIsValid () {
   return this.Course.url !== '' &&
          this.Course.filename !== '' &&
          this.Course.name !== '' &&
          this.select2.subject !== '' &&
          this.select3.grade !== ''
      }
     

 },


    methods: {
   
    
 onCreateMeetup () {
     


     if (!this.formIsValid) {
          return
        }

       

 let meetupData = {
        
          url: this.Course.url,
          filename: this.Course.filename,
          name: this.Course.name,
          subject: this.select2.subject,
          grade: this.select3.grade,
 
      }
      console.log(meetupData);


       axios.post('https://tutor-8e729.firebaseio.com/sheet.json', meetupData)
          .then(res => console.log(res))
          .catch(error => console.log(error))
    }



   
      }
      
      
    }
  
</script>
