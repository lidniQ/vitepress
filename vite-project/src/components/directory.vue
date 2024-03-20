<template>
  <div v-if="editing">
    <textarea v-model="articleContent" @mouseup="handleSelection"></textarea>
    <br>
  </div>
  <div v-else v-html="renderedArticle"></div>
  
</template>

<script>
import { marked } from 'marked';
import { mapState, mapMutations } from 'vuex';

export default {
  data() {
    return {
      articleContent: '# Привет \n ## kak dela?',
      renderedArticle: '',
      editing: true,
    };
  },
  components: {
  },
  computed: {
    ...mapState(['selectedText', 'textarea'])
  },
  methods: {
    
    ...mapMutations(['setSelectedText']),
    handleSelection() {
      this.setSelectedText(window.getSelection().toString());
    }
  },
  mounted() {
    this.renderedArticle = marked(this.articleContent);

  },
};
</script>

<style>
textarea {
  color: black;
  width: 1470px;
  height: 800px;
  border: none;
  padding: 0;
  margin: 0;
  resize: none;
  background: #FFFFFF;  
  border-radius: 5px;

}
button{
  background-color: #ffffff;
  border: 0cap;
}
</style>
