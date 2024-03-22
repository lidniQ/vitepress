import { Store } from 'vuex';

interface RootState {
  selectedText: string;
  textarea: string;
  setflag: boolean;
  setpreview: boolean;
  selectedTitle: string;
  selectedItems: string;
}

const store = new Store<RootState>({
  state: {
    selectedText: '', // Выбранный текст
    textarea: null,
    flag: false,
    preview: false,
    selectedTitle: '',
    selectedItems: '',
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
    setSelectedItems(state, text) { 
      state.selectedItems = text;
    },
  },
  actions: {
    updateSelectedText({ commit }, text) {
      commit('setSelectedText', text);
    },
    updateTextarea({ commit }, textarea) {
      commit('setTextarea', textarea);
    },

  },
  getters: {
    getSelectedText: state => state.selectedText,
    getTextarea: state => state.textarea,
  }
});

export default store;
