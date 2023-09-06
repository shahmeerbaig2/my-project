<template>
    <div class="container">
        
        <div class="row justify-content-center ">
            
            <div class="col-md-7 my-3 ">
                <div>
                    <h1 class="mb-3">Edit student</h1>
                    
                    <div class="mb-3 ">
                        <label for="form-label">name</label>
                    <input type="text" v-model="form.name" class="form-control">
                </div>
                <div class="mb-3 ">
                        <label for="form-label">email</label>
                    <input type="text" v-model="form.email" class="form-control">
                </div>
                <div class="mb-3 ">
                        <label for="form-label">phone</label>
                    <input type="text" v-model="form.phone" class="form-control">
                </div>
                <div class="mb-3 ">
                        <label for="form-label">status</label>
                    <input type="text" v-model="form.status"  class="form-control">
                </div>
                <div class="mb-3 ">
                      <button @click="updateStudent()">update</button>
                </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import { ref,onMounted,computed } from "vue";
import { useStudentStore } from '../stores/studentStore.js';
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';

  const router = useRouter();


const store= useStudentStore();
const route = useRoute();


// x



onMounted(()=>{
      store.fetchStudent();

    }) 

// import axios from 'axios';
//     export default {
        
//         name:"Edit",
const student_id = ref(null);


const form = ref({
    name: '',
  email: '',
  phone: '',
  status: ''
});
        // data(){
        //     return{
        //         student_id:null,
        //         form:{
        //             name:null,
        //             email:null,
        //             phone : null ,
        //             status:null

        //         }
        //     }

        // },

        onMounted(async () => {
    student_id.value = route.params.id;
   
  await fetchSingleStudent();
  
 
});
async function fetchSingleStudent() {
  
  
    const student = await store.fetchSingleRecord(student_id.value);
    console.log(student)
    form.value.name=student.name
    form.value.email=student.email
    form.value.phone=student.phone
    form.value.status=student.status

  
}
async function updateStudent() {
    const { name, email, phone, status } = form.value;
  const studentData = {
    name,
    email,
    phone,
    status,
  };
   store.updateStudent(student_id.value, studentData);
   router.push('/Students');
  
   
  

   
}
// const success = await store.updateStudent(student_id.value, studentData);
//   if (success) {
//     router.push('/Products'); // Assuming `router` is imported correctly
//   } else {
//     // Handle the update failure
//   }



 


//         created() {
//     this.student_id = this.$route.params.id;
//   },
//         mounted(){
//             this.getStudent();

//         },
//         methods:{ 
//             getStudent(){
                // axios.get(`http://127.0.0.1:8000/api/students/${this.student_id}`).then(response =>{
                //     console.log(response.data);
                //     this.form=response.data.students
//                 })
           

//         },
        // updateStudents(){
    //         axios.put(`http://127.0.0.1:8000/api/students/${this.student_id}/edit`,{
    //             name:this.form.name,
    //             email:this.form.email,
    //             phone:this.form.phone,
    //             status:this.form.status

    //         }).then(res=>{
    //             this.$router.push('/Products')
    //         })
    //     }
    // }
       

        
//     }
</script>

<style lang="scss" scoped>

</style>