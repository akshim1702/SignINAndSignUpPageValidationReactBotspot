export default function validateInfo(values) {
    let errors = {};
  
    
    
  
    if (!values.email) {
      errors.email = '! Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = '! Email address is invalid';
    }
    else if (!/^[A-Za-z]+/.test(values.email.trim())) {
      errors.email = '! Enter a valid email';
    }




    if (!values.name.trim()) {
        errors.name = '! Username required';
      }



    if (!values.password) {
      errors.password = '! Password is required';
    } else if (values.password.length <= 8) {
      errors.password = '! Password needs to be 8 characters or more';
    }
  


    if (!values.cnfPass) {
      errors.cnfPass = '! Password is required';
    } else if (values.cnfPass !== values.password) {
      errors.cnfPass = '! Passwords do not match';
    }



    if (!values.birthDate) {
      errors.birthDate = '! Enter Your Birth-date';
    }
    return errors;
  }