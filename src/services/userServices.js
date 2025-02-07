export const getUsersByName = (data, name) => {
  return name != "" ? data.filter((user) => user.firstname === name) : data;
};
