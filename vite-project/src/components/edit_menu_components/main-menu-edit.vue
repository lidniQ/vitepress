<template>
  <div class="main-menu-edit">
    <div class="font-text">
      <div class="title-selection">

      </div>
      <div class="bold-text">
        <bold_text/>
      </div>
      <div class="italic-text">
        <italic_text/>
      </div>
      <div class="underline-text">
        <underline_text/>
      </div>
      <div class="strikethrough-text">
        <strikethrough_text/>
      </div>
    </div>
    <dil class="location">

    </dil>
  </div>
</template>

<script>
import title_selection from './main-menu-edit-components/title-selection.vue'
import bold_text from './main-menu-edit-components/bold-text.vue'
import italic_text from './main-menu-edit-components/italic-text.vue'
import underline_text from './main-menu-edit-components/underline-text.vue'
import strikethrough_text from './main-menu-edit-components/strikethrough-text.vue'

export default {
  data() { 
    return {
    }
  },
  components:{ 
    bold_text,
    italic_text,
    underline_text,
    strikethrough_text,
  }
}
</script>

<style>
.main-menu-edit {
  position: absolute;
  display: flex;  
}

.font-text {
  display: flex;
}
</style>
