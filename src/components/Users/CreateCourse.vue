<template>
  <div>
    <h1>Create Courses</h1>
    <form v-on:submit.prevent="createCourse">
      <p>name: <input type="text" v-model="Course.name" /></p>
      <p>lastname: <input type="text" v-model="Course.lastname" /></p>
      <p>email: <input type="text" v-model="Course.email" /></p>
      <p>password: <input type="text" v-model="Course.password" /></p>
      <p><button type="submit">create Course</button></p>
    </form>
    <hr />
    <div>
      <p>name: {{ Course.name }}</p>
      <p>lastname: {{ Course.lastname }}</p>
      <p>email: {{ Course.email }}</p>
      <p>password: {{ Course.password }}</p>
    </div>
  </div>
</template>
<script>
import CoursesService from "@/services/CourseService";

export default {
  data() {
    return {
      Course: {
        name: "",
        lastname: "",
        email: "",
        password: "",
        status: "active"
      }
    };
  },
  methods: {
    async createCourse() {
      try {
        await CoursesService.post(this.Course);
        this.$router.push({
          name: "Courses"
        });
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>
<style scoped></style>
