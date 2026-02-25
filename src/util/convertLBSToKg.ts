export const convertLbsToKg = (lbs: number): number => {
  return parseFloat((lbs * 0.45359237).toFixed(2));
};
