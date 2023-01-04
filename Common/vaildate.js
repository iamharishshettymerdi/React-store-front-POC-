const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export const emailValidator = (value, setValue) => {
    setValue(p => ({ ...p, errorMessage: '' }));
    if (value.trim().length === 0) {
      setValue(p => ({ ...p, errorMessage: `Please enter your email address.` }));
      return false;
    }
    if (!validEmail.test(value)) {
      setValue(p => ({ ...p, errorMessage: 'Please enter an e-mail address in the format username@domain.com.' }));
      return false;
    }
    return true;
  };