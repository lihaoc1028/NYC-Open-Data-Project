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




