export default (a, b) => { // СОРТИРУЕМ ПО АЛФАВИТУ
  if (a[0] > b[0]) return 1;
  if (a[0] < b[0]) return -1;
  return 0;
};
