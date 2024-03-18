<template>
  <div @click="toggleViews">
    <pencil_edit v-if="!pencil_flag"/>
  </div>
  <div class="edit-menu">
    <main_menu_edit v-if="pencil_flag"/>
  </div>
</template>

<script>
import pencil_edit from '../components/edit_menu_components/pencil-edit.vue'
import main_menu_edit from '../components/edit_menu_components/main-menu-edit.vue'

export default {
  data() {
    return {
      pencil_flag: false,
    }
  },
  components: {
    pencil_edit,
    main_menu_edit,
  },
  methods: {
    toggleViews() {
      this.pencil_flag = !this.pencil_flag;
    }
  }
}
</script>

<style>
edit-menu{
  
}
</style>
