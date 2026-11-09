let parkingLocation = [
    {
        id: 1,
        name: "ABC Parking",
        location: "Gulshan",
        distance: "300m",
        price: "200Pkr",
        available: "yes",
        details: "View details"
    },

    {
        id: 2,
        name: "City Parking",
        location: "Johar",
        distance: "500m",
        price: "600Pkr",
        available: "yes",
        details: "View details"

    },

    {
        id: 3,
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
let sorting = document.querySelector("#sorting-option");
let viewBtn = document.querySelectorAll(".viewbtn");
let parkingPopup = document.querySelector(".popup-card");
let allresrvationbtn = document.querySelector(".allreservationbtn");
let cancelBtn = document.querySelector(".cancelbtn");git
let gen = parkingLocation.map((car, index) => {
    // console.log(car.name);
    // console.log(index)
    return `
            <div class= "parking-card">  
                <h2>${car.name}</h2>
                <p>${car.location}</p>
                    <p>${car.available}</p>
                    <button data-index = ${index} class="viewbtn">${car.details}</button>
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
                    <p>${parkcar.available}</p>
                    <button class="viewbtn">${parkcar.details}</button>
                    
                </div>  
        `
    })

    let joinresult = parkingCar.join("");
    let final = parkingList.innerHTML = joinresult;
    console.log(final);
})

sorting.addEventListener("change", () => {
    let copyArray = [...parkingLocation];

    let copyArray1 = [...parkingLocation];

    let result1 = copyArray.sort((a, b) => parseInt(a.price) - parseInt(b.price));
    let result2 = copyArray1.sort((a, b) => parseInt(b.price) - parseInt(a.price));

    let selectedparking;

    if (sorting.value === "low") {
        selectedparking = (result1);

    }



    if (sorting.value === "high") {
        selectedparking = (result2);

    }
    let parkingCar = selectedparking.map((parkcar) => {
        return `
             <div class= "parking-card">  
                <h2>${parkcar.name}</h2>
                <p>${parkcar.location}</p>
                <p>${parkcar.price}</p>

            
                    <p>${parkcar.available}</p>
                    <button class="viewbtn">${parkcar.details}</button>
                </div>
        `
    })


    let joinresult = parkingCar.join("");
    let final = parkingList.innerHTML = joinresult;
    console.log(final);

})


parkingList.addEventListener("click", (e) => {
    let target = e.target.classList.contains("viewbtn");
    if (target === true) {
        let parkingindex = e.target.dataset.index;
        let parkingobj = parkingLocation[parkingindex]
        // console.log(parkingobj);

        parkingPopup.style.display = "block";

        let name = document.createElement("h3");
        name.innerHTML = `${parkingobj.name}`;

        let locat = document.createElement("p");
        locat.innerHTML = `${parkingobj.location}`;

        let dis = document.createElement("p");
        dis.innerHTML = `${parkingobj.distance}`;

        let pri = document.createElement("p");
        pri.innerHTML = `${parkingobj.price}`;

        let avail = document.createElement("p");
        avail.innerHTML = `${parkingobj.available}`;

        let closBtn = document.createElement("button");
        closBtn.textContent = "Close";

        let reservationBtn = document.createElement("button");
        reservationBtn.classList.add("reserve");
        reservationBtn.textContent = "Reserve Parking";



        parkingPopup.append(name, locat, dis, pri, avail, closBtn, reservationBtn);

        closBtn.addEventListener("click", () => {
            parkingPopup.style.display = "none";
        })


        reservationBtn.addEventListener("click", () => {
            // console.log("clicked reserve parking ")
            let datareead = JSON.parse((localStorage.getItem("reservation")));
            // console.log(datareead);
            //  let f = Array.isArray(datareead)
            //  console.log(f);


            // console.log(reservationparking);

            // reservationparking.push(datareead);

            // let result3 = datareead || [];
            let result3 = [];
            // result3.push(parkingobj);
            // localStorage.setItem("reservation", JSON.stringify((result3)));
            // console.log(result3);


            if (Array.isArray(datareead)) {
                result3 = datareead;
            }

            result3.push(parkingobj);
            localStorage.setItem("reservation", JSON.stringify(result3));
            console.log(result3);



        })

    }
    // console.log(target)
})


allresrvationbtn.addEventListener("click", () => {
    let reusedata = JSON.parse(localStorage.getItem("reservation"));
    console.log(reusedata);
    let parkingCar1 = reusedata.map((parkingcards) => {
        return `
        <div class= "parking-card">  
                    <h2>${parkingcards.name}</h2>
                    <p>${parkingcards.location}</p>
                        <p>${parkingcards.available}</p>
                        <p>${parkingcards.price}</p>
                        <p>${parkingcards.distance}</p>
                        
                        
                        

                    </div> `
    })

    let convertjoin = parkingCar1.join("");
    let finaljoin = parkingList.innerHTML = convertjoin;
    console.log(finaljoin);


    

})