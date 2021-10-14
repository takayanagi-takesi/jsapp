var app = new Vue({
  el: '#app',
  data: {
    egg_status: '半熟'
  },
  computed: {
    checkEgg: function(){
      if(this.egg_status == '完熟') {
        return 'やけたよ';
      } else {
        return 'まだまだ'
      }
    }
  }

})