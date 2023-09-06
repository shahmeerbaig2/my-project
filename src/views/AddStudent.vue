<template>
    <div class="container my-4">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="shadow p-3 rounded">
          <h1 class="fw-bold mb-3">Create Student</h1>
          <form @submit="onSubmit">
            <div class="mb-3">
              <label class="form-label">Name</label>
              <input type="text" v-model="form.name" name="name" class="form-control">
              <div>{{ errors.name }}</div>
            </div>
            <div class="mb-3">
              <label class="form-label">Email</label>
              <input v-model="form.email" name="email" class="form-control">
              <div>{{ errors.email }}</div>
            </div>
            <div class="mb-3">
              <label class="form-label">Phone</label>
              <input v-model="form.phone" name="phone" class="form-control">
              <div>{{ errors.phone }}</div>
            </div>
            <div class="mb-3">
              <label class="form-label">Status</label>
              <input v-model="form.status" name="status" class="form-control">
              <div>{{ errors.status }}</div>
            </div>
            <div class="d-flex justify-content-end">
              <button type="submit" @click="addStudent()" class="btn btn-dark">Create</button>
            </div>
          </form>
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
import { useForm, useField } from 'vee-validate';
import * as yup from 'yup';



  const router = useRouter();


const store= useStudentStore();
const route = useRoute();

const form = ref({
    name: '',
  email: '',
  phone: '',
  status: ''
});


const { handleSubmit, errors } = useForm({
  validationSchema: yup.object({
    email: yup.string().email().required(),
    phone: yup.number().required().positive().integer()
  }),
});
const emailField = useField('email');
const phoneField = useField('phone');

const onSubmit = handleSubmit(async () => {
  try {
    await addStudent();
    router.push('/students');
  } catch (error) {
    console.error(error);
  }
});

async function addStudent() {
    const { name, email, phone, status } = form.value;
  const studentData = {
    name,
    email,
    phone,
    status,
  };
   store.addStudent( studentData);
   store.fetchStudent();
   router.push('/students');

   

  
   
  

   
}

// import axios from 'axios';

//     export default {
//         compnent:'AddProduct',
//         data(){
//             return{
//                 form:{
                   

//                 name:null,
//                 email:null,
//                 phone:null,
//                 status:null,
                
//                 }

//             }
//         },
//         methods: {
//             addProduct(){
//                 axios.post('http://127.0.0.1:8000/api/students',{
                 
//                 name:this.form.name,
//                 email:this.form.email,
//                 phone:this.form.phone,
//                 status:this.form.status,
               


//             }).then(res=>{
//                 console.log(res.data);
//                 this.$router.push('/products')
//             }).catch(error=>{
//                 console.log(error)
//             })

//             }
           
        
    
//     }
//     }
// const email = defineInputBinds('email');
// const phone = defineInputBinds('phone');
</script>

<style lang="scss" scoped>

</style>