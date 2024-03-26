  <template>
    <div v-if="preview">
      <textarea v-model="articleContent" @mouseup="handleSelection" :style="directoryViewStyles"></textarea>
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
        articleContent: '',
      };
    },
    computed: {
      ...mapState(['articleContent', 'selectedText', 'textarea', 'flag', 'preview']),
        directoryViewStyles() {
        return {
          height: this.flag ? '720px' : '800px',
          overflowX: 'hidden',
        };
      },
      renderedArticle() {
        return marked(this.articleContent);
    }
    },
    methods: {
      ...mapMutations(['setSelectedText', 'setTextarea']),
      handleSelection(event) {
      const clickedWord = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
        this.setSelectedText(clickedWord);
        this.setTextarea(document.querySelector('textarea'));
      } 
    },
};
</script>


<style>
  textarea {
    color: black;
    width: 1470px;
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
