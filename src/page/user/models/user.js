

export default {
  namespace: 'user',
  state: {
    text: 'hello',
    login: false,
  },
  reducers: {
    setText(state) {
      return {
        ...state,
        text: '',
      };
    },

  },
  effects: {

  },
};
