import React from 'react'

const ValidateLoginInfo = (values) => {
    let errors = {};

    if (!values.name.trim()) {
        errors.name = 'Username required';
      }



    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length <= 8) {
      errors.password = 'Password needs to be 8 characters or more';
    }
  
    return errors;
}

export default ValidateLoginInfo
