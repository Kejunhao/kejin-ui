<template>
  <div class="dialog-all" v-show="visible">
    <div class="dialog-header" @click="handleClose">
       <span>{{title}}</span>
    </div>
    <div class="dialog-body">
      我是中部
    </div>
    <div class="dialog-foot">
      我是底部
    </div>
   
  </div>
</template>

<script>
export default {
   name: 'kDialog',
   props: {
     title: {
       type: String,
       default: '提示'
     },
     visible: {
       type: Boolean,
       default: true
     }
   },
   data(){
    return{
    
  }
},
   methods:{
     handleClose () {
       console.log('嘿嘿');
       this.$emit('close',false)
     }
}
}
</script>

<style scoped>
.dialog-all{
  margin: 0 auto;
  margin-top: 200px;
  width: 300px;
  height: 500px;
  background: skyblue;
}
.dialog-header{
  cursor:pointer;
}
.dialog-body{
  margin-top: 200px;
}
.dialog-foot{
  margin-top: 200px;
}
</style>