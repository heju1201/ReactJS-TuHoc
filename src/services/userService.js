import axios from "../axios";
const handleLoginApi = (emailUser, passwordUser) => {
  return axios.post("/api/login", { email: emailUser, password: passwordUser });
};
const getAllUsers = (inputId) => {
  return axios.get(`/api/get-all-users?id=${inputId}`);
};
export { handleLoginApi, getAllUsers };
