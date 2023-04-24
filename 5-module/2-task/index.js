function toggleText() {
  let btn = document.querySelector('.toggle-text-button');
  let text = document.getElementById('text');
  if (btn && text) {
    btn.addEventListener('click', (event) => {
      if (text.hidden) {
        text.hidden = false;
      } else {text.hidden = true;}
    });
  }
}
