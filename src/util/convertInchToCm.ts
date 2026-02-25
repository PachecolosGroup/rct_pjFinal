export const convertInchToCm = (inch: number): number => {
  return parseFloat((inch * 2.54).toFixed(2));
};
