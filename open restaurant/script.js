//Data Source: https://data.cityofnewyork.us/Public-Safety/Motor-Vehicle-Collisions-Crashes/h9gi-nx95
//global variables
let data, info, output;


async function init(){  
  let link = "ori.json"; //let link = "https://data.cityofnewyork.us/Transportation/Open-Restaurants-Inspections/4dx7-axux/about_data";
  info = await fetch(link);
  data = await info.json();
 
  let output = document.getElementById("output");
  let build = "";


  for(let i = 0; i < data.length; i+=1){
    let car = data[i];
    build += `<div class="fitted card">
                <h3>${car.restaurantname}</h3>
                 <hr>
                 <p># Borough: ${car.borough}</p>
                 <p># Address: ${car.businessaddress}</p>
                 <p># Post Code: ${car.postcode}</p>
                 <p># Seating Choice: ${car.seatingchoice}</p>
                 <hr>
                 <p># Compliant: ${car.isroadwaycompliant}</p>
                 <hr>
             
              </div>`    
  }
  output.innerHTML = build;
}


// Code below demonstrates the basic process to filter information by borough. Use this as a guide for Challenges 2 and 4 below.
function filterByBorough(){
  let output = document.getElementById("output");
  let bor = document.getElementById("borough").value;
  let result = document.getElementById("result");
 
  let build = "";
  let ct = 0;


  for(let i = 0; i < data.length; i+=1){
    let car = data[i];
    if(car.borough == bor){
        build += `<div class="fitted card">
                <h3>${car.restaurantname}</h3>
                 <hr>
                 <p># Borough: ${car.borough}</p>
                 <p># Address: ${car.businessaddress}</p>
                 <p># Post Code: ${car.postcode}</p>
                 <p># Seating Choice: ${car.seatingchoice}</p>
                 <hr>
                 <p># Compliant: ${car.isroadwaycompliant}</p>
                 <hr>
               
              </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}


// Challenge 2: Create an event handler (function) to filter the 311 Service Request by zip code.
function filterByPost(){
  let output = document.getElementById("output");
  let post = document.getElementById("post").value;
  let result = document.getElementById("result");
 
  let build = "";
  let ct = 0;


  for(let i = 0; i < data.length; i+=1){
    let car = data[i];
    if(car.postcode == post){
 build += `<div class="fitted card">
                <h3>${car.restaurantname}</h3>
                 <hr>
                 <p># Borough: ${car.borough}</p>
                 <p># Address: ${car.businessaddress}</p>
                 <p># Post Code: ${car.postcode}</p>
                 <p># Seating Choice: ${car.seatingchoice}</p>
                 <hr>
                 <p># Compliant: ${car.isroadwaycompliant}</p>
                 <hr>
              </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}
// Challenge 4: Create an event handler (function) to filter the 311 Service Request by complaint type.
function filterByseating(){
  let output = document.getElementById("output");
  let Seating = document.getElementById("seat").value;
  let result = document.getElementById("result");
 
  let build = "";
  let ct = 0;


  for(let i = 0; i < data.length; i+=1){
    let car = data[i];
    if(car.seatingchoice == Seating){
     build += `<div class="fitted card">
                <h3>${car.restaurantname}</h3>
                 <hr>
                 <p># Borough: ${car.borough}</p>
                 <p># Address: ${car.businessaddress}</p>
                 <p># Post Code: ${car.postcode}</p>
                 <p># Seating Choice: ${car.seatingchoice}</p>
                 <hr>
                 <p># Compliant: ${car.isroadwaycompliant}</p>
                 <hr>
              </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}


//---------------------------------------------------------------------------------------------------------------------------------------------------


function filterBycompliant(){
  let output = document.getElementById("output");
  let com = document.getElementById("compliant").value;
  let result = document.getElementById("result");
 
  let build = "";
  let ct = 0;


  for(let i = 0; i < data.length; i+=1){
    let car = data[i];
    if(car.isroadwaycompliant == com){
     build += `<div class="fitted card">
                <h3>${car.restaurantname}</h3>
                 <hr>
                 <p># Borough: ${car.borough}</p>
                 <p># Address: ${car.businessaddress}</p>
                 <p># Post Code: ${car.postcode}</p>
                 <p># Seating Choice: ${car.seatingchoice}</p>
                 <hr>
                 <p># Compliant: ${car.isroadwaycompliant}</p>
                 <hr>
              </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}
//============================================================================================================================================================
function filterByBS(){
  let output = document.getElementById("output");
  let bor = document.getElementById("borough").value;
  let Seating = document.getElementById("seat").value;
  let result = document.getElementById("result");
  console.log("Model" + model);
 
  let build = "";
  let ct = 0;


  for(let i = 0; i < data.length; i+=1){
    let car = data[i];
    if(car.borough == bor && car.seatingchoice == Seating){
     build += `<div class="fitted card">
                <h3>${car.restaurantname}</h3>
                 <hr>
                 <p># Borough: ${car.borough}</p>
                 <p># Address: ${car.businessaddress}</p>
                 <p># Post Code: ${car.postcode}</p>
                 <p># Seating Choice: ${car.seatingchoice}</p>
                 <hr>
                 <p># Compliant: ${car.isroadwaycompliant}</p>
                 <hr>
              </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}







async function init(){
  let link = "ori.json"; //https://data.cityofnewyork.us/resource/h9gi-nx95.json?$limit=200";
  info = await fetch(link);
  data = await info.json();
  console.log(data); 
}

function restaurantByBorough(){
  //Variables to keep count of restaurants by borough
  let q = 0, bk = 0, bx = 0, m = 0, s = 0;

  //Tallying the count of restaurants by borough
  for(let i = 0; i < data.length; i++){
    let restaurant = data[i];
    if(restaurant.borough == "Queens"){
  q++;
    }else if(restaurant.borough == "Manhattan"){
  m++;
    }else if(restaurant.borough == "Brooklyn"){
  bk++;
    }else if(restaurant.borough == "Bronx"){
  bx++;
}
  
  }

  //Creating data for chart (as array of arrays) with 1st position of array being label
  let chartData = [
    ["QUEENS",q],
    ["MANHATTAN",m],
    ["BROOKLYN", bk],
    ["BRONX", bx],
  ];

  //Retrieving chart type from user's selection of drop-down
  let chartType = get("chartType").value;  
  
  //Generate and display chart
  displayChart(chartData,"chart",chartType)
}

function restaurantByseat(){
  //Challenge: Create the same functionality as in the function restaurantsByVehicle() above, except you will be aggregating for the following vehicle types: 'Sedan', 'Station Wagon/Sport Utility Vehicle', 'Taxi', 'Bus', 'Motorcycle' and "Other".  "Other" isn't a vehicle type but simply meant to capture all other vehicles.
  let b = 0, s = 0, r = 0;

  //Variables to keep count of vehicles by type
  for(let i = 0; i < data.length; i++){
    let restaurant = data[i];
    if(restaurant.seatingchoice == "both"){
      b++;
    }else if(restaurant.seatingchoice == "sidewalk"){
      s++;
    }else if(restaurant.seatingchoice == "roadway"){
      r++;
    }
  }
  let chartData = [
    ["Both", b],
    ["Sidewalk", s],
    ["Roadway", r],
  ];
let chartType = get("chartType").value;  
  
  //Generate and display chart
  displayChart(chartData,"chart",chartType)
}

  
  