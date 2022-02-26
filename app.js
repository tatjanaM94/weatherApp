// var searchBtn = document.querySelector("#btn");
// var searchInput = document.querySelector("#inputBar");
// var searchBar = document.querySelector(".searchBar");


// var apiUrlCity = `api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`;
// var apiKey = `cc6849bca6394c3dcfd2160fd9c837a8`;

// https://api.openweathermap.org/data/2.5/find?q=Ohrid&units=metric&appid=cc6849bca6394c3dcfd2160fd9c837a8

// function getData(city) {

//     axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
//         .then(response => {
//             response.data.name
//             console.log(response.data.name);
//             console.log(response);

//         })
//         .then((data) => displayWeather(data))
// }

// function displayWeather(data) {
//     var name = data;
//     var temp = data.main;
//     document.querySelector(".city").innerHTML = `This is ${name}`;
//     document.querySelector(".degreeNum").innerHTML = `This is ${temp}`;
// };


// function search() {
//     getData(searchInput.value);
// }

// searchBar.addEventListener('click', search);

var searchBtn = document.querySelector("#btn");
let weather = {

    inputBar: document.querySelector("#inputBar"),
    apiKey: `cc6849bca6394c3dcfd2160fd9c837a8`,

    getData: function(city) {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`)
            .then(response => {
                response.data
                console.log(response.data);
                this.displayWeather(response.data);
            })

    },

    displayWeather: function(data) {
        const { name } = data;
        const { temp } = data.main;
        const { icon, description } = data.weather[0];
        document.querySelector(".city").innerHTML = `The weather in ${name}`;
        document.querySelector(".degreeNum").innerHTML = ` ${Math.round(temp)} C°`;
        document.querySelector(".icon").src =
            "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerHTML = description;

        console.log(name, temp, icon, description);

    },
    search: function() {
        this.getData(inputBar.value);
        this.inputBar.value = "";
    },
};
searchBtn.addEventListener('click', function() {
    weather.search()
});

weather.inputBar.addEventListener("keyup", function() {
    if (event.key === "Enter") {
        weather.search()
    }
})