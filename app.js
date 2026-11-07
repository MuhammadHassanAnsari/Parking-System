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
let showParking = document.querySelector(".show-availablecar");

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


let availablecar = parkingLocation.filter((availableparking) => {
    return availableparking.available === "yes";
})


searchBtn.addEventListener("click", () => {
    let result = inputValue.value.toLowerCase();

    // console.log(result)

    if (result === "") {
        alert("Fill the input area");
        return;
    }



    let filterResult = availablecar.filter((filtercar) => {
        return filtercar.name.toLowerCase().includes(result) || filtercar.location.toLowerCase().includes(result);
    });


    if (filterResult.length > 0) {
        let cardresultgen = filterResult.map((filtercard) => {
            return `
            <div class= "parking-card">  
                <h2>${filtercard.name}</h2>
                <p>${filtercard.location}</p>
                    <p>${filtercard.distance}</p>
                    <p>${filtercard.price}</p>
                    <p>${filtercard.available}</p>
                    <p>${filtercard.details}</p>
                </div>
                `;


        })



        let joinresult = cardresultgen.join();
        parkingList.innerHTML = joinresult;
    } else {
        parkingList.innerHTML = "No Parking Found";
    }

    inputValue.value = "";



    // console.log(filterResult);
})

// console.log(gen);

showParking.addEventListener("click", () => {
    let parkingCar = availablecar.map((parkcar) => {
        return `
             <div class= "parking-card">  
                <h2>${parkcar.name}</h2>
                <p>${parkcar.location}</p>
                    <p>${parkcar.distance}</p>
                    <p>${parkcar.price}</p>
                    <p>${parkcar.available}</p>
                    <p>${parkcar.details}</p>
                </div>
        `
    })

    let joinresult = parkingCar.join("");
    let final = parkingList.innerHTML = joinresult;
    console.log(final);
})








