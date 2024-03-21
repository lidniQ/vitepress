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
      articleContent: 'Привет, _как_ <center>Центр</center>',
      editing: true,
      renderedArticle: '', 
    };
  },
  computed: {
    ...mapState(['selectedText', 'textarea'])
  },
  methods: {
    ...mapMutations(['setSelectedText', 'setTextarea']),
    handleSelection(event) {
    const clickedWord = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    this.setSelectedText(clickedWord);
} 

  },
  mounted() {
    this.renderedArticle = marked(this.articleContent);
    this.setTextarea(document.querySelector('textarea'));
  }
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
button {
  background-color: #ffffff;
  border: none; 
}
</style>
