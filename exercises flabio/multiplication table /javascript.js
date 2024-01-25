let finalValue = '';
function appendToDisplay(value) {
  document.getElementById('display').value += value;
  finalValue += value;
}
function clearDisplay() {
  document.getElementById('display').value = '';
}

function calcularTabuada() {

  let numeroSelecionado = parseInt(document.getElementById('display').value);
  let table = document.getElementById('tabuadaTable')
    document.getElementById('display').value = '';
    table.innerHTML= '';

  for (let i = 1; i <= 10; i++) {
    let row = table.insertRow();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    cell1.innerHTML = finalValue;  
    cell2.innerHTML = 'x';
    cell3.innerHTML = i;
    cell4.innerHTML = numeroSelecionado * i;
  }
  finalValue = '';
}