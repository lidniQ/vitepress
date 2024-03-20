import { Store } from 'vuex';

interface RootState {
  selectedText: string;
  textarea: string;
  setflag: boolean;
}

const store = new Store<RootState>({
  state: {
    selectedText: '',
    textarea: '',
    flag: false,
  },
  mutations: {
    setSelectedText(state, text) {
      state.selectedText = text;
    },
    setTextarea(state, text) {
      state.textarea = text;
    },
    setflag(state, boolean) { 
      state.flag = boolean;
    }
  }
});

export default store;
