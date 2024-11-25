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