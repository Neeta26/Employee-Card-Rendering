//fetch data and export the object
let url =
  "https://niravkpatel28.github.io/json-data-server/employees/employees.json ";
export const getUsers = async (url) => {
  let response = await axios.get(url);
  return response.data;
};
export let userList = getUsers(url);
console.log("User List : ", userList);
