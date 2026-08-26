document
// Load saved donations when website opens

window.onload = function() {

    displayDonations();

};


// Donation form

document
    .getElementById("donationForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();


        // Get values from form

        let name = document.getElementById("name").value;

        let phone = document.getElementById("phone").value;

        let food = document.getElementById("food").value;

        let quantity = document.getElementById("quantity").value;

        let location = document.getElementById("location").value;

        let foodType = document.getElementById("foodType").value;


        // Create donation object

        let donation = {

            name: name,

            phone: phone,

            food: food,

            quantity: quantity,

            location: location,

            foodType: foodType,

            status: "Available"

        };


        // Get old donations

        let donations =
            JSON.parse(localStorage.getItem("donations")) || [];


        // Add new donation

        donations.push(donation);


        // Save donations

        localStorage.setItem(
            "donations",
            JSON.stringify(donations)
        );


        // Show success message

        document.getElementById("successMessage").innerHTML =
            "Thank you, " + name +
            "! Your food donation has been successfully added.";


        // Clear form

        document.getElementById("donationForm").reset();


        // Display updated table

        displayDonations();

});



// Function to display donations

function displayDonations() {

    let table = document.getElementById("foodTable");

    table.innerHTML = "";


    // Get saved donations

    let donations =
        JSON.parse(localStorage.getItem("donations")) || [];


    // Display every donation

    donations.forEach(function(donation) {

        let newRow = document.createElement("tr");


        newRow.innerHTML = `

            <td>${donation.food}</td>

            <td>${donation.quantity}</td>

            <td>${donation.location}</td>

            <td>${donation.foodType}</td>

            <td>${donation.status}</td>

        `;


        table.appendChild(newRow);

    });

}