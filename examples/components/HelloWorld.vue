<template>
  <span>money----->{{money}} <button @click="handleMoney">点击变数字</button></span>

</template>

<script>
export default {
  name: 'HelloWorld',
  props:{
    money: null
  },
   data(){
    return{
 
  }
},
   methods:{
      handleMoney () {
       this.$emit('update:money',200)
     }
}
}
</script>

<style scoped>

</style>