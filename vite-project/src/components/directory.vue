<template>
   <div v-if="editing">
      <textarea v-model="articleContent"></textarea>
      <br>
      <button @click="saveArticle">Сохранить</button>
    </div>
    <div v-else v-html="renderedArticle"></div>
</template>
<script>
import { marked } from 'marked';

export default {
  data() {
    return {
      articleContent: '# Привет \n ## kak dela?', 
      renderedArticle: '', 
      editing: true, 
    };
  },
  methods: {
    addNewArticle() {

    },
    editArticle() {
      this.editing = true;

    },
    saveArticle() {
      this.renderedArticle = marked(this.articleContent);
      this.editing = false;
    },
  },
  mounted() {
    this.renderedArticle = marked(this.articleContent);

  },
};
</script>

<style>
</style>
