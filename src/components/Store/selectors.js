export const getContactSelector = state => {
  console.log('state', state);
  if (!state) {
    return state.contact;
  }
  state.contact.map(({ name }) => console.log(name));
  //   if (data && contacts.find(el => el.name === data.name)) {
  //     return Notify.failure('Sorry, this contact already in your list.');
  //   } else {
  //     const { name, number } = data;

  // }
};
//виконати сортування по масиву контактів
export const getStepSelector = state => console.log(state.stepAct);
