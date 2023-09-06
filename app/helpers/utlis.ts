export const sanitizePoet = (value: string) => {
  return value.replace("@", "").replace(" ", "");
};
