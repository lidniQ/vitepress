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
padding: 20px;

position: absolute;
width: 1817px;
height: 901px;
left: 20px;
top: 52px;

background: #F2F5F7;
border-radius: 5px;

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

}

.directory-form {
  display: flex;
  flex: 1;
  flex-direction: column; 
}

.directory-edit {
position: absolute;
width: 1457px;
height: 50px;
left: 350px;
top: 20px;

background: #F2F5F7;

}


.directory-view {
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 20px 30px;
gap: 20px;

position: absolute;
width: 1457px;
height: 821px;
left: 350px;
top: 60px;

background: #FFFFFF;

}

</style>
