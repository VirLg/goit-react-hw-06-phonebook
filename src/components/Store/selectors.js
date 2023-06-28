export const contactSelector = state => state.contact;

export const getContactSelector = state => {
  if (!state.contact) {
    return;
  }
  state.contact.map(({ name }) => console.log(name));
  //   if (data && contacts.find(el => el.name === data.name)) {
  //     return Notify.failure('Sorry, this contact already in your list.');
  //   } else {
  //     const { name, number } = data;

  // }
};
//виконати сортування по масиву контактів
export const filerSelector = state => {
  console.log(state.filter);
};

export const getStepSelector = state => console.log(state.stepAct);
