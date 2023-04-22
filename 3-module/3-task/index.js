function camelize(str) {
  let cssToJs = str.split('-');
  for (let i = 1; i < cssToJs.length; i++) { 
    cssToJs[i] = cssToJs[i].charAt(0).toUpperCase() + cssToJs[i].slice(1);
  }
  return cssToJs.join('');
}
