/*****HOME PAGE JS*****/
function submitNewsletter(e) {
    e.preventDefault();

    let email = document.getElementById("email").value;
    let number = document.getElementById("phone").value;

    let optIn = ""

    if (document.getElementById("yes").checked) {
        optIn = document.getElementById("yes").value
    }
    else if (document.getElementById("no").checked) {
        optIn = document.getElementById("no").value
    }
    else {
        optIn = ""
    }

    if (email != "" && number != "" && optIn != "") {
        alert("Form submitted successfully!")
        document.getElementById("email").value = ""
        document.getElementById("phone").value = ""
    }
    else {
        alert("Error in submission! Please try again!")
    }
}

/*****EQUIPMENT PAGE JS*****/
function submitRentalRequest(e) {
    e.preventDefault();

    let fullName = document.getElementById("fname").value + "" + document.getElementById("lname").value;
    let rentals = document.getElementsByName("item");
    let selectedRental = [];

    for (let i = 0; i < rentals.length; i++) {
        if (rentals[i].checked) {
            selectedRental.push(rentals[i].value)
        }
    }

    let sizes = document.getElementById("sizes").value;
    let start = document.getElementById("start").value;
    let end = document.getElementById("end").value;
    let email = document.getElementById("email").value;

    if (fullName != "" && rentals != "" && sizes != "" && start != "" && end != "" && email !== "") {
        alert("Form submitted successfully! Your items are reserved!")
        document.getElementById("fname").value = "";
        document.getElementById("lname").value = "";
        document.getElementById("sizes").value = "";
        document.getElementById("start").value = "";
        document.getElementById("end").value = "";
        document.getElementById("email").value = "";
        document.getElementsByName("item").checked = false

    } else {
        alert("Error! Please fill out all form items!")
    }
}

/*****CONTACT PAGE JS*****/
function submitContact(e) {
    e.preventDefault()

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;

    if (name != "" && email != "" && phone != "") {
        alert("Form submitted successfully!");
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("message").value = "";
    }
    else {
        alert("Error! Please fill out all fields!")
    }
}


