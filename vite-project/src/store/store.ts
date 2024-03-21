import { Store } from 'vuex';

interface RootState {
  selectedText: string;
  textarea: string;
  setflag: boolean;
}

const store = new Store<RootState>({
  state: {
    selectedText: '', // Выбранный текст
    textarea: null,
    flag: false,
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
  },
  actions: {
    updateSelectedText({ commit }, text) {
      commit('setSelectedText', text);
    },
    updateTextarea({ commit }, textarea) {
      commit('setTextarea', textarea);
    }
  },
  getters: {
    getSelectedText: state => state.selectedText,
    getTextarea: state => state.textarea
  }
});

export default store;
