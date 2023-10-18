<template>
  <div>
    <h1>Show Course</h1>
    <p>id: {{ Course.id }}</p>
    <p>ชื่อ-นามสกุล: {{ Course.name }} - {{ Course.lastname }}</p>
    <p>email: {{ Course.email }}</p>
    <p>password: {{ Course.password }}</p>
  </div>
</template>
<script>
import CourseService from "@/services/CourseService";

export default {
  data() {
    return {
      course: null
    };
  },
  async created() {
    let courseId = this.$route.params.courseId;
    this.course = (await CourseService.show(courseId)).data
    console.log(this.courseId)
  }
};
</script>
<style scoped></style>
