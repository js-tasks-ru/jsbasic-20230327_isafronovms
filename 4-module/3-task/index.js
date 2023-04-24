function highlight(table) {
  for (let i = 0; i < table.rows.length; i++) {
    let row = table.rows[i];
    let ageCell = row.cells[1];
    let genderCell = row.cells[2];
    let attributesCell = row.cells[3];

    if (row.parentElement.nodeName === 'TBODY') {
      if (attributesCell.hasAttribute('data-available')) {
        if (attributesCell.getAttribute('data-available') == 'true' ) {
          row.classList.add('available'); 
        } else if (attributesCell.getAttribute('data-available') == 'false') {
          row.classList.add('unavailable'); 
        }
      }

      if (attributesCell.attributes.length == 0) {
        row.setAttribute('hidden', '');  
      } 
      if (ageCell.textContent < 18) {
        row.style.textDecoration = 'line-through';  
      }
  
      if (genderCell.textContent === 'm') {
        row.classList.add('male');  
      } else if (genderCell.textContent == 'f') {
        row.classList.add('female');  
      }
    }
  }
}
