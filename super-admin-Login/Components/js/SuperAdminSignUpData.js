const tableBody = document.getElementById("tableBody");

fetch("http://localhost:4000/SuperAdminSignUp/SuperAdminSignUpData")
  .then((ele) => ele.json())
  .then((data) => {
    data.forEach(item => {
        
   
    const raw = document.createElement("tr");

    for (const Property in item ) {
      if (item.hasOwnProperty(Property)) {
        const tableData = document.createElement("td");

        tableData.textContent = item[Property];
        raw.appendChild(tableData);
      }
    }
    tableBody.appendChild(raw);
  })
})
  .catch((error) => {
    console.log("Error While Fatchiing",error);
  });
