<template>
    <button class="k-button" :class="[`k-button--${type}`,{
        'is-plain': plain
    },{
        'is-big': big
    }]"> 
     <span><slot></slot></span>
    </button>
</template>

<script>
export default {
    name:"kButton",
    props:{
        type:{
            type:String,
            default: 'default'
        },
        plain:{
            type: Boolean,
            default: false
        },
         big:{
            type: Boolean,
            default: false
        }
    },
    created(){
        console.log(this.type);
    },
    data(){
          return{
        }
      },
        methods:{
      }
    }
</script>

<style scoped>
.k-button{
        margin: 10px;
        background-color: #428bca;  
        border-color: #357ebd;  
        color: #fff;  
        -moz-border-radius: 10px;  
        -webkit-border-radius: 10px;  
        border-radius: 10px; /* future proofing */  
        -khtml-border-radius: 10px; /* for old Konqueror browsers */  
        text-align: center;  
        vertical-align: middle;  
        border: 1px solid transparent;  
        font-weight: 900;  
        font-size:125%  
}
.k-button--red{
    background-color: red;
}

.k-button--red.is-plain{
    border-radius: 50%;
}

.k-button--red.is-big{
    width: 100px;
    height: 100px;
}

.k-button--yellow{
    background-color: yellow;
}
.k-button--green{
    background-color: green;
}
</style>