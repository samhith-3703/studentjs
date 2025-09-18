// Student list
var students = [
  [1, "Rohit", "rohit@mail.com"],
  [2, "Anita", "anita@mail.com"],
  [3, "Vikram", "vikram@mail.com"],
  [4, "Priya", "priya@mail.com"]
];

function searchstudent() {
  var inputId = document.getElementById("searchId").value;
  var table = document.getElementById("studentTable");

  // reset table with only header
  table.innerHTML = `
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Email</th>
    </tr>
  `;

  // find student
  var found = students.filter(function(student) {
    return student[0].toString() === inputId;
  });

  if (found.length > 0) {
    var row = table.insertRow();
    row.insertCell(0).textContent = found[0][0];
    row.insertCell(1).textContent = found[0][1];
    row.insertCell(2).textContent = found[0][2];
  } else {
    var row = table.insertRow();
    var cell = row.insertCell(0);
    cell.colSpan = 3;
    cell.textContent = "Student not found";
  }
}
