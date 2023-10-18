<template>
  <div>
    <h1>Edit Courses</h1>
    <h1>Edit Course</h1>
    <form v-on:submit.prevent="editCourse">
      <p>name: <input type="text" v-model="Course.name" /></p>
      <p>lastname: <input type="text" v-model="Course.lastname" /></p>
      <p>email: <input type="text" v-model="Course.email" /></p>
      <p>password: <input type="text" v-model="Course.password" /></p>
      <p><button type="submit">edit Course</button></p>
    </form>
    <hr />
    <div>
      <p>name: {{ Course.name }}</p>
      <p>lastname: {{ Course.lastname }}</p>
      <p>email: {{ Course.email }}</p>
      <p>password: {{ Course.password }}</p>
      <p></p>
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
    async editCourse() {
      try {
        await CoursesService.put(this.course);
        this.$router.push({
          name: "Courses"
        });
      } catch (err) {
        console.log(err);
      }
    }
  },
  async created() {
    try {
      let courseId = this.$route.params.courseId;
      this.course = (await CoursesService.show(CourseId)).data;
    } catch (error) {
      console.log(error);
    }
  }
};
</script>
<style scoped></style>
