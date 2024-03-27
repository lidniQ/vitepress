<template>
  <div class="main-menu-edit">
    <div class="section">
      <div class="row">
        <div class="col">
          <div class="first box">
            <form>
              <select id="font-size" name="text-size" @change="handleFontSizeChange">
                <option value="h1">Заголовок 1</option>
                <option value="h2">Заголовок 2</option>
                <option value="h3">Заголовок 3</option>
                <option value="p">Параграф</option>
              </select>
            </form>
          </div>
          <div class="second box">
            <button type="button"
                    @click="handleBoldText">
                    <i class="fa-solid fa-bold"></i>
            </button>
            <button type="button"
                    @click="handleItalicText">
                    <i class="fa-solid fa-italic"></i>            
            </button>
            <button type="button"
                    @click="handleUnderlineText">
                    <i class="fa-solid fa-underline"></i>
            </button>
            <button type="button"
                    @click="handleStrikethroughText">
                    <i class="fa-solid fa-strikethrough"></i>
            </button>
          </div>
          <div class="third box">
            <button type="button"
                    @click="alignLeft">
                    <i class="fa-solid fa-align-left"></i>
            </button>
            <button type="button"
                    @click="alignCenter">
                    <i class="fa-solid fa-align-center"></i>
            </button>
            <button type="button"
                    @click="alignRight">
                    <i class="fa-solid fa-align-right"></i>
            </button>
            <button type="button"
                    @click="alignJustify">
                    <i class="fa-solid fa-align-justify"></i>
            </button> 
          </div>
          <div class="fourth box">
            <button type="button">
                    <i class="fa-solid fa-image"></i>
            </button>
            <button type="button">
                    <i class="fa-solid fa-video"></i>            
            </button>
            <button class="link" type="button">
                    <i class="fa-solid fa-link"></i>            
            </button>
            <button type="button">
                    <i class="fa-solid fa-table"></i>            
            </button>
            <button type="button" @click="applyColor">
            <i class="fa-solid fa-paint-brush"></i>
            </button>
            <input type="color" v-model="newColor">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      newColor: '',
    };
  },
  computed: {
    ...mapState(['color']),

  },
  created() {
    this.newColor = this.color; 
  },
  watch: {
    newColor(event) {
      this.updateColor(event); 
    }
  },
  methods: {
    ...mapActions(['updateColor', 'updateSelectedText']),
    insertMarkdownText(textToInsert) {
      const textarea = this.$store.getters.getTextarea;
      const startPos = textarea.selectionStart;
      const endPos = textarea.selectionEnd;
      let text = textarea.value;

      if (this.$store.state.selectedText === "" || this.$store.state.selectedText === " ") {

      }
      else {
        text = text.substring(0, startPos) + textToInsert + text.substring(startPos, endPos) + textToInsert + text.substring(endPos);
        textarea.value = text;
        this.markdownContent = textarea.value;
      }
    },

    handleBoldText() {
      this.insertMarkdownText('**');
    },

    handleItalicText() {
      this.insertMarkdownText('_');
    },
    handleUnderlineText() { 
      const textarea = this.$store.getters.getTextarea;
      const startPos = textarea.selectionStart;
      const endPos = textarea.selectionEnd;
      let text = textarea.value;

      if (this.$store.state.selectedText === "" || this.$store.state.selectedText === " ") {

      }
      else {
        text = text.substring(0, startPos) + '<u>' + text.substring(startPos, endPos) + '</u>' + text.substring(endPos);
        textarea.value = text;
        this.markdownContent = textarea.value;
      }
    },
    handleStrikethroughText() { 
      this.insertMarkdownText('~');
    },
    alignLeft() { 
      this.insertMarkdownText('');
    },
    alignCenter() { 
      const textarea = this.$store.getters.getTextarea;
      const startPos = textarea.selectionStart;
      const endPos = textarea.selectionEnd;
      let text = textarea.value;

      if (this.$store.state.selectedText === "" || this.$store.state.selectedText === " ") {

      }
      else {
        text = text.substring(0, startPos) + '<center>' + text.substring(startPos, endPos) + '</center>' + text.substring(endPos);
        textarea.value = text;
        this.markdownContent = textarea.value;
      }
    },
    alignRight() { 
      const textarea = this.$store.getters.getTextarea;
      const startPos = textarea.selectionStart;
      const endPos = textarea.selectionEnd;
      let text = textarea.value;

      if (this.$store.state.selectedText === "" || this.$store.state.selectedText === " ") {

      }
      else {
        text = text.substring(0, startPos) + '<p align="right">' + text.substring(startPos, endPos) + '</p>' + text.substring(endPos);
        textarea.value = text;
        this.markdownContent = textarea.value;
      }
    },
    alignJustify() { 
      this.insertMarkdownText('|');

    },
    applyColor() {
      this.updateColor(this.newColor);
      this.colorText();

  },
    colorText() {
      const textarea = this.$store.getters.getTextarea;
      const startPos = textarea.selectionStart;
      const endPos = textarea.selectionEnd;
      const selectedText = this.$store.state.selectedText;
      let text = textarea.value;

      if (selectedText === "" || selectedText === " ") {
        return;
      }

      const coloredText = `<font color="${this.color}">${selectedText}</font>`;
      const fontTagRegex = /<font color="#[0-9a-fA-F]{6}">.*?<\/font>/g;
      const existingFontTags = text.match(fontTagRegex);

      if(existingFontTags){
          existingFontTags.forEach((tag) => {
              if(tag.includes(selectedText)){
                  text = text.replace(tag, tag.replace(selectedText, coloredText));
              }
          });
      } else {
          text = text.substring(0, startPos) + coloredText + text.substring(endPos);
      }

      textarea.value = text;
      this.markdownContent = textarea.value;
    },
  }
};
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.main-menu-edit {
  display: flex;
  justify-content: center;
  align-items: center;
}
.section{
  height: 80px;
  width: 1400px;

}
.col{
  
}

.box{
  display: inline-block !important;
  padding: 0 5px;
}

.first{
  border-right: 2px solid #40576d33;
  select{
    background-color: #F2F5F7;
  }
}
.second{
  border-right: 2px solid #40576d33;
  button:hover{
    background-color: #16c8aa86;
  }
  button:focus{
  background-color: #0af1cb;
  color: #000000;
} 
}

.third{
  border-right: 2px solid #40576d33;
  button:hover{
    background-color: #16c8aa86;
  }
  button:focus{
  background-color: #0af1cb;
  color: #000000;
} 

}

.fourth{
  input[type=color]{
  outline: none;
  border: none;
  background-color: #F2F5F7;
}
button:hover{
    background-color: #16c8aa86;
  }
  button.link:focus {
  background-color: #0af1cb;
  color: #000000;
}

}

select {
  outline: none;
  border: none;
  width: 120px;
  color: #131c35;
  font-size: 16px;
  background-color: #fff;
  padding: 10px 0;
  margin-left: 2px;
}

option:nth-child(1) {
  font-size: 18px; 
}
option:nth-child(2) { 
  font-size: 17px; 
}

option:nth-child(3) {
  font-size: 16px; 
}

option:nth-child(4) {
  font-size: 14px; 
}

button{
  border: none;
  color: #131c35;
  font-size: 16px;
  font-weight: 300;
  background: transparent;
  padding: 10px 16px;
  border-radius: 3px;
  cursor: pointer;
  user-select: none;
}
</style>
