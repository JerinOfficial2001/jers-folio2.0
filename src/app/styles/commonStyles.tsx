export const flexStyle = (
  direction?: string,
  gap?: any,
  items?: string,
  content?: string
) => {
  return {
    display: "flex",
    justifyContent: content ? content : "center",
    alignItems: items ? items : "center",
    flexDirection: direction ? direction : "unset",
    gap: gap ? gap : "unset",
  };
};
