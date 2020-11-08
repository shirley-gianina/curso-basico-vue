new Vue ({
  el: '#app',

  data () {
    return  {
      courses: [],
      title: "",
      time: "",
      suma: 0
    }
  },

  watch: {
    totalTime (newVal, oldVal) {
      console.log(newVal, oldVal)
    }
  },

  computed: {
    totalTime() {
      this.suma = 0;
      for (let item of this.courses) {
        this.suma = this.suma + item.time;
      }
      return this.suma;
    },

  },

    methods: {
      addCourses: function () {
        this.courses.push({title:this.title, time:this.time,});
        this.title = "", this.time= "";
      }




   }



})






