export const recursiveFlat = (arr) => {
  let flattenArray = [];
  arr.forEach((el) =>
    Array.isArray(el)
      ? flattenArray.push(...recursiveFlat(el))
      : flattenArray.push(el)
  );
  return flattenArray;
};
