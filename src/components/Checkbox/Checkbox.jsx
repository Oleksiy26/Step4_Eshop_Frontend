import React from "react";

const Checkbox = ({id, label, colorSquare, classForSquare}) => {
    return (
        <>
            <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id={id}
                />
                <label className="form-check-label" for={id}>
                  {colorSquare && <div className={"color-square " + classForSquare}></div>} 
                  {label}
                </label>
            </div>
        </>
    )
}

export default Checkbox;