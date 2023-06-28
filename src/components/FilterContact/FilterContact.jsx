import { filterContact } from 'components/Store/contactSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilerContact } from '../Store/selectors';
export const Filter = () => {
  const filerSelector = state => {};

  const filter = useSelector(state => {
    console.log(state);
  });
  console.log(filter);
  const dispatch = useDispatch();
  const handleChange = evt => {
    dispatch(filterContact(evt.target.value));
  };

  return (
    <label>
      Search
      <input type="text" name="filter" onChange={handleChange} />
    </label>
  );
};
