
function validateInput(input) {
    input.value = input.value.replace(/[^a-zA-Z]/g, '');
  }
  function generatePNR() {
    const characters = '0123456789';
    let pnr = '';
    for (let i = 0; i < 9; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        pnr += characters[randomIndex];
    }
    return pnr;
}

function addPnrToTable(event) {
    event.preventDefault();  

    const name = document.getElementById('name').value;
    const seat = document.getElementById('seat-type1').value;
    const coach=document.getElementById('coach-preference').value;
    const boardingPoint = document.getElementById('boardingPoint').value;
    const endingPoint = document.getElementById('endingPoint').value;
    
    if (name === '' || seat === '' || boardingPoint === '' || endingPoint === ''||coach==='') {
        alert("All fields are required!");
        return;
    }

    const pnrTable = document.getElementById('pnrTable').getElementsByTagName('tbody')[0];
    const newRow = pnrTable.insertRow();

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    const cell6 = newRow.insertCell(5);
    const cell7 = newRow.insertCell(6);

    
    const rowCount = pnrTable.rows.length;

    cell1.textContent = rowCount;
    cell2.textContent = generatePNR();
    cell3.textContent = name;
    cell4.textContent = seat;
    cell5.textContent = coach;
    cell6.textContent = boardingPoint;
    cell7.textContent = endingPoint;

    
    document.getElementById('pnrForm').reset();
}


document.getElementById('generatePnrBtn').addEventListener('click', addPnrToTable);
