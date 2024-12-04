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

/*****FAQ PAGE JS*****/
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;

        const isActive = content.classList.contains('active');

        document.querySelectorAll('.accordion-content').forEach(panel => {
            panel.classList.remove('active');
            panel.style.maxHeight = null;
        });

        if (!isActive) {
            content.classList.add('active');
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    });
});

/*****TOURISM PAGE JS*****/
class Attraction {
    constructor(id, name, descr, locationURL, imageURL) {
        this.id = id;
        this.name = name;
        this.descr = descr;
        this.locationURL = locationURL;
        this.imageURL = imageURL;
    }
}

const attractions = [
    new Attraction(1, "Mount Olympus National Park", "A UNESCO Biosphere Reserve, this park offers stunning biodiversity,hiking trails,and scenic views. It's home to diverse flora and fauna, including endemic species.", "https://www.google.com/maps/dir//Mount+Olympus+National+Park", "../Images/olympus-park.png"),
    new Attraction(2, "The Muses Plateau", "Named after the nine Muses of Greek mythology, this plateau offers breathtaking views and is an ideal spot for hiking. The landscape is dotted with alpine meadows and ancient stone paths.", "https://www.google.com/maps/dir//Unnamed+Road,+Litochoro+602+00/", "../Images/muses-plateau.png"),
    new Attraction(3, "The Ancient City of Dion", "An archaeological site and ancient Greek city dedicated to Zeus, Dion was a major religious center. The ruins include temples, a theater, and sanctuaries. It also houses a museum displaying artifacts.", "https://www.google.com/maps/dir//Dion+601+00/@40.1738794,22.4090548,12z/", "../Images/dion-tour.png"),
    new Attraction(4, "Litochoro", "A town at the foot of Mount Olympus known as the Gateway to Olympus, Litochoro is a charming town with a rich history. It's a base for hikers and offers access to the mountain's trails, plus local tavernas and shops.", "https://www.google.com/maps/dir//Litochoro,+602+00/@40.1030494,22.4202095,12z/", "../Images/litochoro.png"),
    new Attraction(5, "Olympus Ski Resort", " A popular winter destination offering skiing, snowboarding, and snowshoeing in the winter months, along with hiking in summer. It provides spectacular views of the mountain and surrounding area.", "https://www.google.com/maps/dir//Elassona+402+00/@40.0421366,22.259119,12z/", "../Images/olympus-ski.png"),
    new Attraction(6, "The Monastery of St. Dionysios", "This monastery is dedicated to Saint Dionysios, the patron saint of Mount Olympus. It is perched on a cliff and offers peaceful surroundings, with impressive Byzantine architecture and historical significance.", "https://www.google.com/maps/dir//Litochoro+602+00/@40.1182808,22.4022891,12z/", "../Images/st-dionysios.png")
]

attractions.forEach((attraction) => {
    addAttraction(attraction);
})

function addAttraction(attraction) {
    let html = `
        <div class="card" id="attraction-${attraction.id}">
            <img src="${attraction.imageURL}" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">${attraction.name}</h5>
                <p class="card-text">${attraction.descr}</p>
                <a href="${attraction.locationURL}" class="btn btn-primary">Directions</a>
            </div>
        </div>`

    //insertAdjacentHTML gets two arguments: First is the position, second is HTML
    //The four possible positions are: "beforeBegin", "afterBegin", "beforeEnd", "afterEnd"
    document.getElementById("attraction-container").insertAdjacentHTML("beforeend", html);
}



