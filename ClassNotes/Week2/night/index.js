// What does API stand for? Application Programming Interface

// Computer 1 ---- { ...profileInfo }
// ^
// | ----API
// V
// Computer 2 ---- { ...users Computer }


// Different Types of APIs
// RESTful API -- For simple Data retrieval and manipulation.
//      HTTP Methods -- GET, POST, PUT, DELETE
//      GET --- Gets the info you want from a Database.
//      POST --- Send the info to the Database.
//      PUT --- Updates info on the Database.
//      DELETE -- Removes the info from the Database.

// Third-Party APIs
// Online Services that offer APIs that allow you to access thier data. Such as Google Maps API

// Weather APIs
// For weather data

// Financial APIs
// Used to fetch financial data like stock prices. Such as Yahoo Finance.

//GET request

/* define the API URL */
// Question mark(?) to seperate the url from the parameters
// After first parameter i use the and symbol(&)
const apiUrl = 'https://api.edamam.com/search?q=chicken&app_id=ec165b04&app_key=806febda6922960b171f9072daed2388';

/* Make GET request */
// fetch(url, {options})
const token = "";

fetch(apiUrl, {
    method: "GET",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
        "Content-Type": "applicaton/json",
        "Authorization": `Bearer ${token}`
    }
})
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        // JSON- Javascript Object Notation
        return response.json();
    })
    .then((data) => {
        console.log(data.hits.map((item) =>{
            document.getElementById("container").innerHTML = ``
            $("#container").innerHTML = ``
            return item.recipe.label
    }));
    })
    .catch((error) => {
        console.error(error);
    });


