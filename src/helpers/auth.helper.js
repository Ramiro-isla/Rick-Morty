const fakeUsers = [
  {
    email: "user@user.net",
    password: "12345",
    name: "user",
    lastName: "user",
  },
  {
    email: "user2@user.net",
    password: "12345abcd",
    name: "user2",
    lastName: "user2",
  },
];

export const checkUser = (form) => {
  const userFound = fakeUsers.find((user) => {
    return form.name === user.email && form.password === user.password;
  });

  return userFound;
};

