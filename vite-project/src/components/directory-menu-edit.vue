<template>
  <pencil_edit/>
</template>
<script>
import pencil_edit from '../components/edit_menu_components/pencil-edit.vue'
export default{
  data(){
    return{
      pencil_flag: false,
    }
  },
  components:{
    pencil_edit,
  }
}
</script>

<style>
</style>
