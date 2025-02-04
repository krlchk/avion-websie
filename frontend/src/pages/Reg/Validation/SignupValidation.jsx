const SignupValidation = (values) => {
    let error = {};
    const email_patternt = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
  
    if (values.name === "") {
        error.name = "Input should not be empty";
      } else {
        error.name = "";
      }

    if (values.email === "") {
      error.email = "Input should not be empty";
    } else if (!email_patternt.test(values.email)) {
      error.email = "Email didn't match";
    } else {
      error.email = "";
    }
  
    if (values.password === "") {
      error.password = "Input should not be empty";
    } else if (!password_pattern.test(values.password)) {
      error.password = "Password didn't match";
    } else {
      error.password = "";
    }
    return error;
  };
  
  export default SignupValidation;