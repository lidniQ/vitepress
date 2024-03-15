<template>
  <div class="container">
    <div class="erka-menu-bar">
      <erka_menu_bar/>  
    </div>
    <div class="directory">
      <div class="directory-sidebar">
        <directory_side_bar/>
      </div>
      <div class="directory-form">
        <div class="directory-edit">
          <directory_menu_edit/>
        </div>
        <div class="directory-view">
          <Directory/>
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

export default {
  components: {
    erka_menu_bar,
    directory_side_bar,
    Directory,
    directory_menu_edit,

  }
}

</script>


<style>
.container {
  display: flex;
  flex-direction: column;
  margin-left:30px;
  
}

.erka-menu-bar {
  height: 60px;
  background-color: #dee6e9;
  padding-bottom:20px;
  
}

.directory {
  display: flex;
  flex: 1;
  background-color: #f2f5f7;

  border-radius: 10px;
}

.directory-sidebar {

  width: 20%;
}

.directory-form {
  display: flex;
  flex: 1;
  flex-direction: column; 
}

.directory-edit {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin: 40px 0 10px 0;
  padding: 10px 0 0 10px;
  background-color: lightgray;

}


.directory-view {
  height: 300px; 
  background-color: #ffff;
}

</style>
