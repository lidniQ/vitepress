import { Store } from 'vuex';

interface RootState {
  selectedText: string;
  textarea: string;
  setflag: boolean;
  setpreview: boolean;
  selectedTitle: string;
  articleContent: string;
  color: string;
}

const store = new Store<RootState>({
  state: {
    selectedText: '', // Выбранный текст
    textarea: null,
    flag: false,
    preview: false,
    selectedTitle: '',
    color: "#000000",
  },
  mutations: {
    setSelectedText(state, text) {
      state.selectedText = text;
    },
    setTextarea(state, textarea) {
      state.textarea = textarea;
    },
    setflag(state, boolean) { 
      state.flag = boolean;
    },
    setpreview(state, boolean) { 
      state.preview = boolean;
    },
    setSelectedTitle(state, text) { 
      state.selectedTitle = text;
    },
    setArticleContent(state, text) { 
      state.articleContent = text
    },
    setColor(state, text) { 
      state.color = text
    },
    

  },
  actions: {
    updateColor({ commit }, newColor) {
      commit('setColor', newColor);
    },
    updateSelectedText({ commit }, text) {
      commit('setSelectedText', text);
    },
    updateTextarea({ commit }, textarea) {
      commit('setTextarea', textarea);
    },

  },
  getters: {
    getColor: state => state.color,
    getSelectedText: state => state.selectedText,
    getTextarea: state => state.textarea,
  }
});

export default store;
