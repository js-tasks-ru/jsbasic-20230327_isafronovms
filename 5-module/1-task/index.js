function hideSelf() {
  let btn = document.querySelector('.hide-self-button');
  if (btn) {
    btn.addEventListener('click', (event) => {
      btn.hidden = true;
    });
  }
}
