import { useDispatch } from 'react-redux';
import { createAction } from '@reduxjs/toolkit';
import { stepAct } from 'components/Store/contactSlice';
export const Step = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const value = e.target.elements[0].value;
    console.log(value);
    // dispatch({ type: 'setStep', payload: value });
    // const setStepAction = value => {
    //   return { type: 'setStep', payload: value };
    // };
    // ========================
    // const stepActFn (value)=>{
    //   return { type: 'setStep', payload: value };
    // }
    // dispatch(createAction(stepActFn.setStep))
    // /======================
    // const stepAct = createAction('setStep');
    // ; це не потрібно, бо slice
    console.log(stepAct.prototype);
    dispatch(stepAct(value));
    console.log(dispatch(stepAct(value)));
  };
  return (
    <form onSubmit={handleSubmit}>
      <input />
      <button type="submit">Step</button>
    </form>
  );
};
