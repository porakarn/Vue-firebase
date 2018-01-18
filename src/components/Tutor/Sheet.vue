<template>
  <v-container>
 
    <v-layout row wrap>
     
        <v-flex xs12 sm12 class="text-xs-center text-sm-center">
             <v-btn large router to="/createsheet" class="info">แชร์เอกสารการสอน</v-btn>
       
       
        <!-- <input type="text" v-model="filterText">
                <ul>
                    <li v-for="fruit in filteredFruits"> {{ fruit }} </li>
                   
                </ul> -->
       
      </v-flex>
    
    </v-layout>
<br>
 <input type="text" v-model="search" placeholder="search courses" />
    <v-layout row wrap v-for="course in  filteredCourses" class="mb-2">
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
        <v-card >
     
            <v-layout row>
             
              <v-flex xs12 sm12 md12 >
                <v-card-title primary-title>
                  <div>
                   
                 <v-btn :href="course.url" flat secondary>{{ course.filename }}</v-btn> 
                         <br>
                
                  โดย : {{ course.name }} <br>
                  วิชา : {{ course.subject }}  <br>
                  ระดับชั้น : {{ course.grade }}  <br> 
             
          
                  </div>
                
                </v-card-title>
       
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
    
    data() {
        return {
            courses: [],
             search: ''
            
        }
    },
 created () {
    axios.get('https://tutor-8e729.firebaseio.com/sheet.json')
            .then((response) => {
                console.log(response.data);
             var coursex = response.data;
           var coursey =  Object.keys(coursex).map(function(_) { return  coursex[_]; })
           this.courses = coursey
            })
            .catch((error) => {
                console.log(error);
            });
            //

//
 },

  // computed: {
  //         filteredFruits(){
  //            return this.fruits.filter((op) => {
  //               return op.match(this.filterText);
  //            });
  //         }
  //       }

computed: {
        filteredCourses(){
             return this.courses.filter((pp) => {
                return pp.filename.match(this.search);
            
            });
        }
    }
  }

  
</script>

