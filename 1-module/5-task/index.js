function truncate(str, maxlength) {
  let ending = "…";
  if (str.length > maxlength) {
    return str.slice(0, maxlength - str.length - ending.length) + ending;
  }
  return str;
}
