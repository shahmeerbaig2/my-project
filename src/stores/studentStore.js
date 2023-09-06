import { defineStore } from 'pinia';
import axios from 'axios';
// import { useRouter } from 'vue-router';

//   const router = useRouter();

export const useStudentStore = defineStore({
  id: 'student', 
  state: () => ({
    students: [],
  }),
  getters: {
    getStudents(state) {
      return state.students;
    },
  },
  actions: {
    async fetchStudent() {
      try {
        const data = await axios.get('http://127.0.0.1:8000/api/students');
        this.students = data.data.students;
      } catch (error) {
        alert(error);
        console.error(error);
      }
    },
    async deleteStudent(student_id){
      const response =	await axios.delete(`http://127.0.0.1:8000/api/students/${student_id}/delete`);
      this.fetchStudent();
        console.log(response);
  
    },
    async updateStudent(student_id,studentData){
     const response= await axios.put(`http://127.0.0.1:8000/api/students/${student_id}/edit`,studentData )
    this.fetchStudent();

    },
    async fetchSingleRecord(student_id){
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/students/${student_id}`);
        console.log(response.data.students)
        return response.data.students; 
      } catch (error) {
        console.error(error);
        throw error; 
      }

    },
    addStudent(studentData){
      const response = axios.post('http://127.0.0.1:8000/api/students',studentData)
      this.fetchStudent();

    }
  },
  
});
