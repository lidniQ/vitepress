<template>
  <div @click="toggleViews">
    <pencil_edit v-if="!flag"/>
  </div>
  <div class="edit-menu">
    <main_menu_edit v-if="preview"/>
  </div>
</template>

<script>
import pencil_edit from '../components/edit_menu_components/pencil-edit.vue'
import main_menu_edit from '../components/edit_menu_components/main-menu-edit.vue'
import { mapState, mapMutations } from 'vuex';

export default {
  data() {
    return {
    }
  },
  components: {
    pencil_edit,
    main_menu_edit,
  },
  computed: {
    ...mapState(['flag', 'preview'])
  },
  methods: {
    ...mapMutations(['setflag', 'setpreview']),
    toggleViews() {
      this.setflag(true);
      this.setpreview(true);
    }
  }
}
</script>

<style>
edit-menu{
  
}
</style>
