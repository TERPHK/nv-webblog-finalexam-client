import Vue from 'vue'
import Router from 'vue-router'
import CourseIndex from '@/components/Users/Index'
import CourseEdit from '@/components/Users/EditCourse'
import CourseShow from '@/components/Users/ShowCourse'
import CourseCreate from '@/components/Users/CreateCourse'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/course/create',
      name: 'course-create',
      component: CourseCreate
    },
    {
      path: '/course/edit/:courseId',
      name: 'course-edit',
      component: CourseEdit
    },
    {
      path: '/course/:courseId',
      name: 'course',
      component: CourseShow
    },
    {
      path: '/courses',
      name: 'courses',
      component: CourseIndex
    },

    

  ]
})
