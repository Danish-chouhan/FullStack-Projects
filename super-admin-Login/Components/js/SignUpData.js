const tableBody = document.getElementById("tableBody");

fetch("http://localhost:4000/SignUp/SignUpData")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item) => {
      const row = document.createElement("tr");

      for (const property in item) {
        if (item.hasOwnProperty(property)) {
          const tableData = document.createElement("td");

          tableData.textContent = item[property];

          row.appendChild(tableData);
        }
      }

      tableBody.appendChild(row);
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
