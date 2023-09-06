<template>
    <div class="container my-4">
      <div class="row align-items-center">
        <div class="col">
          <h1 class="fw-bold mb-0">Students</h1>
          <div class="input-group rounded">
  <input type="search" class="form-control rounded" placeholder="Search"  v-model="search" />
  <span class="input-group-text border-0" id="search-addon">
    <i class="fas fa-search"></i>
  </span>
</div>
          <div class="col text-end ">
            <label class="ml-2">Add student</label>
            <button  class="btn btn-dark m-2" @click="addStudent()">+</button>
           
          </div>
          
        </div>
      </div>
      <div v-if="mystudents.length === 0">
      <p>No students available.</p>
    </div>
      <div v-else>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">phone</th>
              <th scope="col">status</th>
              <th scope="col">edit/delete</th>
              
            </tr>
          </thead>
          <tbody>
            <tr v-for="student in filterStudent" :key="student.id">
              <td>{{ student.name }}</td>
              <td>{{ student.email }}</td>
              <td>{{ student.phone }}</td>
              <td :class="student.status === 'active' ? 'active' : 'inactive'" >{{ student.status }}</td>
              <td><router-link  class="btn btn-success " :to="'/Edit/'+student.id">edit</router-link><button class="btn-danger btn shadow-non border-0 m-2" @click="store.deleteStudent(student.id)" >delete</button></td>
             
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script setup>
  import axios from 'axios';
  import { onMounted,computed ,ref} from "vue";
  import { useStudentStore } from '../stores/studentStore.js';
  import { useRouter } from 'vue-router';


  const router = useRouter();
  

  
 
   
    // name: 'Products',
    
   
     
      const store= useStudentStore();
      const mystudents = computed(() => store.getStudents);

      

      
      
    onMounted(()=>{
      store.fetchStudent();
    

    }) 
    const search=ref('');

    const filterStudent= computed((()=>{
      const query=search.value.toLowerCase();

      return mystudents.value.filter(student=>{
        return(
          student.name.toLowerCase().includes(query)||
      student.email.toLowerCase().includes(query)
        )
      })
    }))



    // const deleteStudent=computed((student_id)=>{
    //   store.deleteStudent(student_id);
    //   store.fetchStudent();


    // })


    
    // data() {
    //   return {
    //     students: null,
    //   };
    // },
   
    // methods: {
    //   getStudents() {
    //     axios.get('http://127.0.0.1:8000/api/students').then((response) => {
    //       this.students = response.data.students;
    //       console.log(this.students)
    //     });
    //   },
      // async deleteStudent(student_id){
      //   try {
			// const response =	await axios.delete(`http://127.0.0.1:8000/api/students/${student_id}/delete`);
			// 	console.log(response);
			// 	this.getStudents();
			// 	toast.success(response.data.message);
			// } catch (error) {
      //            console.log(error)
			// }


    //   },
    //   addStudent(){
    //     this.$router.push('/AddProduct')

    //   }
    // },
    const addStudent=(()=>{
    router.push('/AddStudent')
    })
   
  
  

  </script>
  
  <style lang="scss" scoped>

.active {
  color: green;
}
.inactive{
  color: red;
}

  </style>
  