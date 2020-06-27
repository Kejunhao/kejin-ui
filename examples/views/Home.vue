<template>
  <div class="home">
    <k-button>kkkk</k-button>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
 
  data(){
    return{
      title: 'kejin',
      visible: false,
      money: 100
    }
  },
  methods:{
    fn(a) {
      this.visible = a
    },
    fn1(a){
      this.money = 200
    }
  }
}
</script>
