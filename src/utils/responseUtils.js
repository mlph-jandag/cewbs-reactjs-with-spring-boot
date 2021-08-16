export const extractErrorMessages = (response) => {
  const result = response.data;
  if (result.errors) {
    const error = result.errors[0];
    for (const key in error) {
      return error[key];
    }
  }
  if (result.message) {
    return result.message;
  }
}