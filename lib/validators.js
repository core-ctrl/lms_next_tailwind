export const isEmail = (email) => /\S+@\S+\.\S+/.test(email);
export const isEmpty = (value) => !value || value.trim() === "";
