import React from 'react';

const Checkbox = ({ id, label, colorSquare, classForSquare, onChangeCheckbox }) => {
  return (
    <>
      <div className="form-check" onChange={onChangeCheckbox}>
        <input className="form-check-input" type="checkbox" value={label} id={id} />
        <label className="form-check-label" htmlFor={id}>
          {colorSquare && <div className={'color-square ' + classForSquare}></div>}
          {label}
        </label>
      </div>
    </>
  );
};

export default Checkbox;
