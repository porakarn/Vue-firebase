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
            <v-flex xs6 sm2 offset-sm3>
              <v-text-field
                name="nickname"
                label="ชื่อเล่น"
                id="nickname"
                v-model="Course.nickname"
                required></v-text-field>
            </v-flex>
            <v-flex xs6 sm2 offset-sm1 >
              <v-text-field
                name="phone"
                label="เบอร์ติดต่อ"
                id="phone"
                v-model="Course.phone"
                required></v-text-field>
            </v-flex>
          </v-layout>
           <v-layout row>
               <v-flex xs6 xs6 sm2 offset-sm3>
            <v-select
              v-bind:items="aitems"
              v-model="select"
              label="เพศ"
              single-line
              item-text="gender"
              item-value="gender"
              return-object
              :hint="`${select.gender}`"
              persistent-hint
                required
            ></v-select>
          </v-flex>
          
              <v-flex xs6 sm2 offset-sm1>
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
                label="โรงเรียน"
                id="school"
                v-model="Course.school"
                required></v-text-field>
            </v-flex>
          </v-layout>
            <v-layout row>
                <v-flex xs6 sm2 offset-sm3>
            <v-select
              v-bind:items="bitems"
              v-model="select2"
              label="ระดับการศึกษา"
              single-line
              item-text="grade"
              item-value="grade"
              return-object
              :hint="`${select2.grade}`"
              persistent-hint
              required
            ></v-select>
          </v-flex>
            <v-flex xs6 sm2 offset-sm1  >
              <v-text-field
                name="gradeDetail"
                label="ระดับชั้น"
                id="gradeDetail"
                v-model="Course.gradeDetail"
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
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="purpose"
                label="จุดประสงค์ของการเรียน"
                id="purpose"
                v-model="Course.purpose"
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
             <v-flex xs6 sm3 offset-sm3 >
            <v-select
              v-bind:items="citems"
              v-model="select3"
              label="เพศติวเตอร์"
              single-line
              item-text="gendertutor"
              item-value="gendertutor"
              return-object
              :hint="`${select3.gendertutor}`"
              persistent-hint
                required
            ></v-select>
          </v-flex>
              <v-flex xs6 sm3>
            <v-select
              v-bind:items="ditems"
              v-model="select4"
              label="เรียนกี่คน"
              single-line
              item-text="numberstudent"
              item-value="numberstudent"
              return-object
              :hint="'เรียน '+ `${select4.numberstudent}`+ ' คน'"
              persistent-hint
                required
            ></v-select>
              </v-flex> 
          </v-layout>

 <v-layout row>
 <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="student"
                label="ระดับความรู้ของนักเรียน"
                id="student"
                v-model="Course.student"
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
       <v-flex xs4 sm2 offset-sm3>
            <v-select
              label="วันที่เรียน"
              v-bind:items="days"
              v-model="e6"
              multiple
              max-height="400"
                required
           
            ></v-select>
          </v-flex>
          
              <v-flex xs4 sm2>
            <v-select
              v-bind:items="eitems"
              v-model="select5"
              label="ชม/ครั้ง"
              single-line
              item-text="hour"
              item-value="hour"
              
           return-object
              :hint=" ' เรียน ' + `${select5.hour}`  +  ' ชม/ครั้ง'"
              persistent-hint
              required
            ></v-select>
          </v-flex>
            <v-flex xs4 sm2 >
              <v-text-field
                name="time"
                label="เวลาเรียน"
                id="time"
                hint="เช่น 4-6 โมง"
                v-model="Course.time"
                required></v-text-field>
            </v-flex>
          </v-layout>
         
           <!-- <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="location"
                label="สถานที่เรียน"
                id="location"
                v-model="Course.location"
                required></v-text-field>
            </v-flex>
          </v-layout> -->

        
          <br><br>
    
     <p>ค่าเรียน/ชม/คน {{ result }} บาท  </p>
     <p>ค่าเรียนทั้งหมด/ครั้ง/คน {{ result*select5.hour }} บาท  </p>
         
        
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
            select: { gender: ''},
        aitems: [
          { gender: 'ชาย'},
          { gender: 'หญิง'},
        
        ],
         select2: { grade: ''},
        bitems: [
          { grade: 'มัธยมปลาย'},
          { grade: 'มัธยมต้น'},
          { grade: 'ประถม'},
          { grade: 'อนุบาล'},
          { grade: 'มหาลัย'},
          { grade: 'ทำงาน'},
        
        ],
          select3: { gendertutor: ''},
        citems: [
          { gendertutor: 'All'},
          { gendertutor: 'ชาย'},
          { gendertutor: 'หญิง'},
        
        ],
          select4: { numberstudent: ''},
        ditems: [
          { numberstudent: 1},
          { numberstudent: 2},
          { numberstudent: 3},
          { numberstudent: 4},

        
        ],
           select5: { hour: ''},
        eitems: [      
          { hour: 2},
          { hour: 3},
          { hour: 4},

        
        ],
           
        
        revenue:'',
        fee: '',
         
        e6: [],
       
        days: [
          'จันทร์','อังคาร','พุธ','พถหัส',
          'ศุกร์','เสาร์','อาทิตย์'
        ],


          Course: { 
        name: '',
        nickname: '',
        phone: '',
        line: '',
        school: '',
        gradeDetail:'',     
        subject:'',
        purpose:'',
        student:'',
        tutor:'',
        location:'',
        time:'',
        id:''
      
              }
        
    
      }
    },
    computed: {
      formIsValid () {
   return this.Course.name !== '' &&
          this.Course.nickname !== '' &&
          this.Course.phone !== '' &&
      
          this.Course.line !== '' &&
          this.Course.school !== '' &&
          this.Course.purpose !== '' &&
          this.Course.gradeDetail !== '' &&
          this.Course.subject !== '' &&
          this.Course.student !== '' &&
          this.Course.tutor !== '' &&
          this.Course.location !== '' &&     
          this.Course.time !== ''   &&   
          this.select5.hour !== ''   &&  
          this.select.gender !== ''   &&  
          this.e6 !== ''   &&  
          this.select2.grade !== ''   && 
          this.select4.numberstudent !== ''   &&
          this.select3.gendertutor !== ''  
    
      },
      result: function(){
          return this.select2.grade == 'มัธยมปลาย' ? '300' : '250';
      },
      resultfee: function(){
          return this.result*this.select5.hour == '500' ? '800' : '1000';
      }

 },


    methods: {
   
    
 onCreateMeetup () {
     


     if (!this.formIsValid) {
          return
        }

       

 let meetupData = {
        
          name: this.Course.name,
          nickname: this.Course.nickname,
          phone: this.Course.phone,
          line: this.Course.line,
          school: this.Course.school,
          purpose: this.Course.purpose,
          gradeDetail: this.Course.gradeDetail,
          subject: this.Course.subject,
          student: this.Course.student,
          tutor: this.Course.tutor,
          location: this.Course.location,
          time: this.Course.time,
          hour: this.select5.hour,
          id: 'A' + Math.floor(Math.random()*10000),
          gender: this.select.gender,
          e6: this.e6.toString(),
          revenue: this.result*this.select5.hour,
          fee: this.resultfee,
          grade: this.select2.grade,
          numberstudent: this.select4.numberstudent,
          gendertutor: this.select3.gendertutor,
 
      }
      console.log(meetupData);


       axios.post('https://tutor-8e729.firebaseio.com/student.json', meetupData)
          .then(res => console.log(res))
          .catch(error => console.log(error))
    }



   
      }
      
      
    }
  
</script>
