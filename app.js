// import the data from data.js
const tableData = data;
// Reference the HTML table using d3
var tbody = d3.select("tbody");
// Build table
function buildTable(data) {
    // Clear an existing data
    tbody.html("")
    // Loop through each object& append rows & cells for each value in row
    data.forEach((dataRow) => {
        // append a row to table body
        let row = tbody.append("tr");
        // loop through each field in dataRow & add each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}


