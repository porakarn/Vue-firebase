<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h5>สมัครเรียน</h5>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
      <form @submit.prevent="onCreateMeetup">
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="name"
                label="ชื่อ-นามสกุล นักเรียน"
                id="name"
                v-model="Course.name"
                required></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="phone"
                label="เบอร์ติดต่อ"
                id="phone"
                v-model="Course.phone"
                required></v-text-field>
            </v-flex>
          </v-layout>
           <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="line"
                label="Line Id"
                id="line"
                v-model="Course.line"
                required></v-text-field>
            </v-flex>
          </v-layout>
           <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="school"
                label="สถานการศึกษา"
                id="school"
                v-model="Course.school"
                required></v-text-field>
            </v-flex>
          </v-layout>
            <v-layout row>
            <v-flex xs6 sm4 offset-sm3>
              <v-text-field
                name="grade"
                label="ระดับชั้น"
                id="grade"
                v-model="Course.grade"
                required></v-text-field>
            </v-flex>
          </v-layout>
          <br>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
           <h5>Step 2 หลักสูตรที่ต้องการเรียน</h5>
      </v-flex>
    </v-layout>

 <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="subject"
                label="วิชาที่เรียน"
                id="subject"
                v-model="Course.subject"
                required></v-text-field>
            </v-flex>
          </v-layout>

 <v-layout row>
            <v-flex xs6 sm2 offset-sm3>
              <v-text-field
                name="student"
                label="นักเรียน อยุ่ชั้นไหน"
                id="student"
                v-model="Course.student"
                required></v-text-field>
            </v-flex>
          </v-layout>

 <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="tutor"
                label="รายละเอียด ติวเตอร์"
                id="tutor"
                v-model="Course.tutor"
                required></v-text-field>
            </v-flex>
          </v-layout>

           <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="location"
                label="สถานที่เรียน"
                id="location"
                v-model="Course.location"
                required></v-text-field>
            </v-flex>
          </v-layout>

   <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="date"
                label="รายละเอียดวันที่เรียน เวลา"
                id="date"
                v-model="Course.date"
                required></v-text-field>
            </v-flex>
          </v-layout>

        
          <br><br>
    
     
           
        
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
           e1: 0,
          Course: { 
        name: '',
        phone: '',
        line: '',
        school: '',
        grade:'',     
        subject:'',
        student:'',
        tutor:'',
        location:'',
        date:'',
        id:''
              }
        
    
      }
    },
    computed: {
      formIsValid () {
        return this.Course.name !== '' &&
          this.Course.phone !== '' &&
          this.Course.line !== '' &&
          this.Course.school !== '' &&
          this.Course.grade !== '' &&
          this.Course.subject !== '' &&
          this.Course.student !== '' &&
          this.Course.tutor !== '' &&
          this.Course.location !== '' &&
          this.Course.date !== ''       
      }},
    methods: {
     
    
 onCreateMeetup () {
     
     if (!this.formIsValid) {
          return
        }

 let meetupData = {
        
          name: this.Course.name,
          phone: this.Course.phone,
          line: this.Course.line,
          school: this.Course.school,
          grade: this.Course.grade,
          subject: this.Course.subject,
          student: this.Course.student,
          tutor: this.Course.tutor,
          location: this.Course.location,
          date: this.Course.date,
          id: 'A' + Math.floor(Math.random()*10000)
      }
      console.log(meetupData);


       axios.post('https://tutor-8e729.firebaseio.com/student.json', meetupData)
          .then(res => console.log(res))
          .catch(error => console.log(error))
    }



   
      }
      
      
    }
  
</script>
