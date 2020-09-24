// from data.js
var tableData = data;

// References
// Select the button
var button = d3.select('#filter-btn');
// Select the form
var form = d3.select('form');
// Select table body
var tbody = d3.select('tbody');

// Append table data to the table body in html page
tableData.forEach(ufoSightings => {
    var row = tbody.append('tr')
    Object.entries(ufoSightings).forEach(([key, value]) => {
        var cell = row.append('td')
        cell.text(value)
    });
});

// Create event listeners
button.on('click', runEnter);
form.on('submit', runEnter);

// Create the event handle function
function runEnter() {
    
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the 
    var inputElement = d3.select('#datetime');
    
    // Get the value property of the input element
    var inputValue = inputElement.property('value');

    // Filter UFO sightings data based on date input
    var filteredData = tableData.filter(ufoSightings => ufoSightings.datetime === inputValue);

    // Reset the table before displaying filtered data
    tbody.html('');

    // Append the filtered data to the table body in html page
    filteredData.forEach(ufoSightings => {
        var row = tbody.append('tr')
        Object.entries(ufoSightings).forEach(([key, value]) => {
            var cell = row.append('td')
            cell.text(value)
        });
    });

};
