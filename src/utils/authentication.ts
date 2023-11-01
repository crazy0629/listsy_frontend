const setCurrentUser = (email: string, token: string, isRemember: boolean) => {
  localStorage.setItem("token", "Bearer " + token);
  if (isRemember) {
    localStorage.setItem("remember", email);
  } else {
    localStorage.removeItem("remember");
  }
};

export { setCurrentUser };
