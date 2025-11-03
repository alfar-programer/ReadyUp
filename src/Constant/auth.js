// src/Constant/auth.js
export const getUserType = () => {
  return localStorage.getItem("userType"); // ممكن تكون "admin" أو "restaurant" أو "user"
};

export const setUserType = (type) => {
  localStorage.setItem("userType", type);
};

export const logout = () => {
  localStorage.removeItem("userType");
};
