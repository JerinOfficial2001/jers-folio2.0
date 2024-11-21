export const flexStyle = (
  direction?: any,
  gap?: any,
  items?: any,
  content?: any
) => {
  return {
    display: "flex",
    justifyContent: content ? content : "center",
    alignItems: items ? items : "center",
    flexDirection: direction ? direction : "unset",
    gap: gap ? gap : "unset",
  };
};
