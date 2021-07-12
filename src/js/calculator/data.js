const refs = {
  calculator: document.querySelector('.container-calc'),
  display: document.querySelector('[data-action="output"]'),
};

const params = {
  firstNumber: '',
  secondNumber: '',
  operator: '',
  previousKey: {
    dataset: {
      state: '',
    },
  },
  previousKeyType: '',
  result: '',
};

export { refs, params };
