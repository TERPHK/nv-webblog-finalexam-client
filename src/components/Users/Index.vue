<template>
  <div>
    <h1>Get All courses</h1>
    <div>จํานวนผู้ใช้งาน {{ courses.length }}</div>
    <div v-for="course in courses" v-bind:key="course.id">
      <div>id: {{ course.id }}</div>
      <div>ชื่อ-นามสกุล: {{ course.name }} - {{ course.lastname }}</div>
      <div>email: {{ course.email }}</div>
      <div>password: {{ course.password }}</div>
      <p>
        <button v-on:click="navigateTo('/course/' + course.id)">
          ดูข้อมูลผู้ใช้
        </button>
        <button v-on:click="navigateTo('/course/edit/' + course.id)">
          แกไขข้อมูล
        </button>
        <button v-on:click="deleteCourse(course)">ลบข้อมูล</button>
      </p>
      <hr />
    </div>
  </div>
</template>
<script>
import CourseServices from "@/services/CourseService";
export default {
  data() {
    return {
      courses: []
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    async deleteCourse(course) {
      let result = confirm("Want to delete?");
      if (result) {
        try {
          await CourseServices.delete(course);
          this.refreshData()
        } catch (err) {
          console.log(err);
        }
      }
    },
    async refreshData() {
      this.courses = (await CourseServices.index()).data;
    }
  },
  async created() {
    this.courses = (await CourseServices.index()).data;
  }
};
</script>
<style scoped></style>
