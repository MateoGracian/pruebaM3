const validate = (values) => {
    const errors = {};
  
    if (!values.name) {
      errors.name = "Required";
    } else if (values.name.length > 15) {
      errors.name = "Must be 15 characters or less";
    } else if (!/^[a-zA-Z\s]+$/.test(values.name)) {
      errors.name = "Only letters and spaces are allowed";
    }

    if(!values.username) {
        errors.username = "Required";
    } else if(values.username.length > 15) {
        errors.username = "Must be 15 characters or less";
    } else if (!/^[a-zA-Z0-9]+$/.test(values.username)) {
        errors.username = "Only letters and numbers are allowed";
    }
  
    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
  
    if (!values.birthdate) {
      errors.birthdate = "Required";
    } else {
      const today = new Date();
      const selectedDate = new Date(values.birthdate);
      if (selectedDate > today) {
        errors.birthdate = "Date cannot be in the future";
      }
    }
  
    if (!values.nDni) {
      errors.nDni = "Required";
    } else if (!/^\d{8}$/.test(values.nDni)) {
      errors.nDni = "Must be exactly 8 digits";
    }

    if(!values.password) {
        errors.password = "Required";
    } else if(values.password.length < 8) {
        errors.password = "Password must be at least 8 characters long";
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(values.password)) {
        errors.password = "Password must contain at least one uppercase letter, one lowercase letter and one number";
    }

    return errors;
  };
  
  export default validate;
  