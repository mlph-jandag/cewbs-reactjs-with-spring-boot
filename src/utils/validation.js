// check if fields has no empty value
export const isFormValid = (data) => {
  return !Object.keys(data).some((index) => {
    return data[index] === "";
  });
};
