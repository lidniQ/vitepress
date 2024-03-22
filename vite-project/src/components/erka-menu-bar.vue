<template>
  <div class="menubar">
    <span><a href="http://10.27.1.65:5003/">Главный экран</a> &nbsp;|&nbsp; <span><a href="index.html">Справка</a></span> <span v-if="selectedTitle"><a class="selected">&nbsp;|&nbsp;{{selectedTitle }}</a></span></span>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapState(['selectedTitle', 'selectedItems'])
  },
}
</script>

<style>
  .menubar{
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 0px;
  gap: 10px;

  position: absolute;
  width: auto;
  height: 17px;
  left: 20px;
  top: 16px;
  }
  a{
    text-decoration: none;
      color: black;
  }
  a.selected{
  color: #707070;
  }
</style>
