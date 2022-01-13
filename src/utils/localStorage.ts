export const setLocalStorage = (key: string, value: string) => {
  const data = localStorage.setItem(key, JSON.stringify(value));
  return data;
};

export const getLocalStorage = (key: string) => {
  const data = localStorage.getItem(key);
  return JSON.parse(data as string);
};

// export const getToken = () => {
//   const data = localStorage.getItem('token');
//   const dataTmp = JSON.parse(data);
//   return dataTmp;
// };
