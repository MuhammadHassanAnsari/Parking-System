let parkingLocation = [
    {
        name: "ABC Parking",
        location: "Gulshan",
        distance: "300m",
        price: "200Pkr",
        available: "yes",
        details: "View details"
    },

    {
        name: "City Parking",
        location: "Johar",
        distance: "500m",
        price: "200Pkr",
        available: "yes",
        details: "View details"

    },

    {
        name: "Safe Parking",
        location: "DHA",
        distance: "1.2km",
        price: "100Pkr",
        available: "full",
        details: "View details"

    },



]

let parkingList = document.querySelector(".parking-cards");
let searchBtn = document.querySelector(".searchbtn");
let inputValue = document.querySelector(".input");

let gen = parkingLocation.map((car) => {
    return `
        <div class= "parking-card">  
            <h2>${car.name}</h2>
             <p>${car.location}</p>
                <p>${car.distance}</p>
                <p>${car.price}</p>
                <p>${car.available}</p>
                <p>${car.details}</p>
            </div>
    `;
})

parkingList.innerHTML = gen;

searchBtn.addEventListener("click", () => {
    let result = inputValue.value.toLowerCase();
    
    // console.log(result)

    let filterResult = parkingLocation.filter((filtercar) => {
          return filtercar.name.toLowerCase() === result || filtercar.location.toLowerCase() === result;
    });

    console.log(filterResult);




})


// console.log(gen);