<template>
  <v-container>
    <v-layout row wrap v-for="course in courses" :key="course.id" class="mb-2">
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
        <v-card class="grey lighten-4">
     
            <v-layout row>
             
              <v-flex xs12 sm12 md12 >
                <v-card-title primary-title>
                  <div>
                    <div>{{ course.id }} :
                      {{ course.subject }}
                      {{ course.purpose }}
                  / {{ course.tutor }}
                    เพศติวเตอร์ {{ course.gendertutor }} /
                      น้องผู้{{course.gender }}
                   {{ course.gradeDetail }}
                     {{ course.numberstudent }} คน
                  ({{ course.school }}) /
                    ที่ {{ course.location }}
                   เรียน ({{ course.e6 }})
                    เวลา {{ course.time }} /
                    ค่าสอน {{ course.revenue }}
                    ค่าแนะนำ {{ course.fee }}</div>
                  </div>
                </v-card-title>
                <!-- <v-card-actions>
                  <v-btn flat :to="'/meetups/' + meetup.id">
                    <v-icon left light>arrow_forward</v-icon>
                    View Meetup
                  </v-btn>
                </v-card-actions> -->
              </v-flex>
            </v-layout>
       
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios';
  export default {
     name:'course',
    data() {
        return {
            courses: null,
            id: null,
            gendertutor: null,
            gender: null,
            numberstudent: null,
            e6: null,
            revenue: null,
            fee: null
        }
    },
 created () {
    axios.get('https://tutor-8e729.firebaseio.com/student.json')
            .then((response) => {
                console.log(response.data);
                this.courses = response.data;
            })
            .catch((error) => {
                console.log(error);
            });

}
  }

  
</script>


//--------------------------------------------------------------------//


