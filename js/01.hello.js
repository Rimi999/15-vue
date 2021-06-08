new Vue({
  el: '#app',
  data: {
    title: '',
    isShowImg: false,

  },
  methods: {
    onShowImg(){
      this.isShowImg = true
    },
    onHideImg(){
      this.isShowImg = false
    }
  }
})