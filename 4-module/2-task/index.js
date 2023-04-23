function makeDiagonalRed(table) {
  let cellHihlighted = 0;
  for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].cells[cellHihlighted++].style.backgroundColor = "red";
  }
}
