// from data.js
var tableData = data;

// References
// Select the button
var button = d3.select('#filter-btn');
// Select the form
var form = d3.select('.form-group');
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

    // Select the input element and get the value property
    // DateTime
    var inputDateTime = d3.select('#datetime').property('value');
    // City
    var inputCity = d3.select('#city').property('value').toLowerCase();
    // State
    var inputState = d3.select('#state').property('value').toLowerCase();
    // Country
    var inputCountry = d3.select('#country').property('value').toLowerCase();
    // Shape
    var inputShape = d3.select('#shape').property('value').toLowerCase();

    // If statements to determine the input Element being filtered
    // DateTime
    if (inputDateTime) {
        // Filter UFO sightings data based on date input
        var filteredData = tableData.filter(ufoSightings => ufoSightings.datetime === inputDateTime);        
    }
    // City
    if (inputCity) {
        // Filter UFO sightings data based on date input
        var filteredData = tableData.filter(ufoSightings => ufoSightings.city === inputCity);
    }
    // State
    if (inputState) {
        // Filter UFO sightings data based on date input
        var filteredData = tableData.filter(ufoSightings => ufoSightings.state === inputState);
    }
    // Country
    if (inputCountry) {
        // Filter UFO sightings data based on date input
        var filteredData = tableData.filter(ufoSightings => ufoSightings.country === inputCountry);
    }
    // Shape
    if (inputShape) {
        // Filter UFO sightings data based on date input
        var filteredData = tableData.filter(ufoSightings => ufoSightings.shape === inputShape);
    }

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
