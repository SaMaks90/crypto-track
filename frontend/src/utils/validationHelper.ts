export const validateEmail = (value: string): string => {
  let errorMessage = "";
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    errorMessage = "Invalid email address";
  }
  return errorMessage;
};

export const validatePassword = (value: string) => {
  let errorMessage = "";

  if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{6,}$/.test(value)) {
    errorMessage = "Invalid password. Minimum length of 6 characters.";
  }

  return errorMessage;
};
