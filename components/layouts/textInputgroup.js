import React from 'react';
import PropTypes from 'prop-types';

 const textInputgroup =({
   label,
   name,
   value,
   placeholder,
   type,
   onChange
 }) =>{
  return(
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input type="text" name={name}
      className="form-control form-control-lg"
      placeholder={placeholder}
      value={name}
      onChange={onChange}
      />
      </div>
  )
}

textInputgroup.PropTypes = {
  label: PropTypes.string.isRequired
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func .isRequired
}
textInputgroup.defaultProps = {
  type:'text'
}

export default textInputgroup;