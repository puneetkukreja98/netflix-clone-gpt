export const checkValidData = (email, password) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPassValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/.test(
      password
    );
  if (!isEmailValid & !isPassValid) return "Email id & password are not valid";
  if (!isEmailValid) return "Email id is not valid";
  if (!isPassValid) return "Password is not valid";

  return null;
};
