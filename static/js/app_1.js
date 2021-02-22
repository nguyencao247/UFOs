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

// handle what to do after an input is given
function handleClick() {
    // grab datetime value from filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    // check if date was entered & filter data using that date
    if (date) {
        // apply 'filter' to table data to only keep rows that matches filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    // rebuild table using filtered data
    buildTable(filteredData);
}

// add event to filter button on webpage
d3.selectAll("#filter-btn").on("click", handleClick);

// built unfiltered table when page loads
buildTable(tableData);

