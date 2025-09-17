 
// Fixed student array: [id, name, email]
let students = [
  [1, "Rohit", "rohit@mail.com"],
  [2, "Anita", "anita@mail.com"],
  [3, "Vikram", "vikram@mail.com"],
  [4, "Priya", "priya@mail.com"]
];

function searchstudent() {
  let name = document.getElementById("searchName").value;
  let table = document.getElementById("studentTable");

  // clear old table rows (except header)
  table.innerHTML = `
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Email</th>
    </tr>
  `;

  // find matching student(s)
  let found = false;
  for (let i = 0; i < students.length; i++) {
    if (students[i][1].toLowerCase() === name.toLowerCase()) {
      let row = table.insertRow();
      row.insertCell(0).innerHTML = students[i][0];
      row.insertCell(1).innerHTML = students[i][1];
      row.insertCell(2).innerHTML = students[i][2];
      found = true;
    }
  }

  // if no student found
  if (!found) {
    let row = table.insertRow();
    let cell = row.insertCell(0);
    cell.colSpan = 3;
    cell.innerHTML = "Student not found";
  }
}