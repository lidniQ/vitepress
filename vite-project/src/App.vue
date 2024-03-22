<template>
  <div class="container">
    <div class="erka-menu-bar">
      <erka_menu_bar/>  
    </div>
    <div class="directory">
      <div class="directory-sidebar">
        <scroll style="width: 320px; overflow-x: hidden;">
        <directory_side_bar/>
        </scroll>
      </div>
      <div class="directory-form">
        <div class="directory-edit"  v-if="selectedTitle">
          <directory_menu_edit/>  
        </div>
        <div class="directory-view" :style="directoryViewStyles">
          <div class="empty_wrapper" v-if="!selectedTitle">
          <div class="empty_label"> Выберите модуль для просмотра документации </div>
          <div class="empty_icon" style="padding-left: 32px;"> <i class="fa-solid fa-info"></i></div>
        </div>
            <scroll style="width: 1475px; overflow-x: hidden;" v-if="selectedTitle">
              <Directory/>
            </scroll>
        </div>
        <div class="choise-menu">
          <save_choice v-if="flag"/>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import erka_menu_bar from './components/erka-menu-bar.vue'
import directory_side_bar from './components/directory-side-bar.vue'
import Directory from './components/directory.vue'
import directory_menu_edit from './components/directory-menu-edit.vue'
import scroll from './components/scroll.vue';
import save_choice from './components/save-choice.vue';
import { mapState, mapMutations } from 'vuex';

export default {
  components: {
    erka_menu_bar,
    directory_side_bar,
    Directory,
    directory_menu_edit,
    scroll,
    save_choice,
  },
  computed: {
    ...mapState(['flag', 'preview', 'selectedTitle']),
directoryViewStyles() {
      return {
        height: this.flag ? '760px' : '800px',
        overflowX: 'hidden',
      };
    },
  },
}

</script>


<style>
.container {
  display: flex;  
  flex-direction: column;
  margin-left:30px;
  width: 1857px;
  height: 978px;
  background: #DEE6E9;
}

.erka-menu-bar {
  height: 60px;
  background-color: #dee6e9;
  padding-bottom:20px;
  
}

.directory {
  display: flex;
flex-direction: row;
align-items: flex-start;

position: absolute;
width: 1817px;
height: 901px;
left: 20px;
top: 52px;

background: #F2F5F7;
border-radius: 5px;


}

.empty_wrapper {
  position: sticky;
  margin: auto;
  width: 450px;
  height: 150px;
  border-radius: 10px;
  z-index: 99999999;
  background-color: #DEE6E9;
}

.empty_label {
  text-align: center;
  margin-top: 10px;
  width: 100%;
  color: black;
}

.empty_icon {
  position: sticky;
  color: #DEE6E9;
  background-color: #FFFFFF;
  margin: auto;
  margin-top: 18px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  font-size: 50px;
}
.directory-sidebar {
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 10px;
gap: 15px;

width: 320px;
height: 861px;

background: #F2F5F7;

flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;
border-radius: 5px;

}

.directory-form {
  display: flex;
  flex: 1;
  flex-direction: column; 
  height: 100%;
  width: 100%;
}

.directory-edit {
position: absolute;
width: 1457px;
height: 50px;
top: 20px;
background: #F2F5F7;

}


.directory-view {
display: flex;
flex-direction: column;
align-items: flex-start;
position: absolute;
margin-top: 80px;
margin-left: 0px;
height: 700px;
width: 1470px;
border-radius: 5px;
background: #FFFFFF;
z-index: 1
}


.choise-menu {
  display: flex;
flex-direction: column;
align-items: flex-start;
position: absolute;
top: 841px;

height: 60px;
width: 1470px;

background: #F2F5F7;
}

</style>
