

let data, info;


async function init(){  
  let link = "ori.json"; //let link = "https://data.cityofnewyork.us/Transportation/Open-Restaurants-Inspections/4dx7-axux/about_data";
  info = await fetch(link);
  data = await info.json();
 
  let output = document.getElementById("output");
  let build = "";


  for(let i = 0; i < data.length; i+=1){
    let car = data[i];
    build += `<div class="fitted card">
                <h3>${car.on_street_name}</h3>
                 <hr>
                 <p># Date: ${car.crash_date}</p>
                 <p># Time: ${car.crash_time}</p>
                 <p># Injured: ${car.number_of_persons_injured}</p>
                 <hr>
                 <p># Contributing factor: ${car.contributing_factor_vehicle_1}</p>
                 <hr>
                 <p># Vehicle Type: ${car.vehicle_type_code1}</p>
              </div>`    
  }
 output.innerHTML = build;
}


// Code below demonstrates the basic process to filter information by borough. Use this as a guide for Challenges 2 and 4 below.
function filterByModel(){
  let output = document.getElementById("output");
  let mod = document.getElementById("model").value;
  let result = document.getElementById("result");
 
  let build = "";
  let ct = 0;


  for(let i = 0; i < data.length; i+=1){
    let car = data[i];
    if(car.vehicle_type_code1 == mod){
      build += `<div class="fitted card">
                <h3>${car.on_street_name}</h3>
                 <hr>
                 <p># Date: ${car.crash_date}</p>
                 <p># Time: ${car.crash_time}</p>
                 <p># Injured: ${car.number_of_persons_injured}</p>
                 <hr>
                 <p># Contributing factor: ${car.contributing_factor_vehicle_1}</p>
                 <hr>
                 <p># Vehicle Type: ${car.vehicle_type_code1}</p>
              </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}


// Challenge 2: Create an event handler (function) to filter the 311 Service Request by zip code.
function filterByInjured(){
  let output = document.getElementById("output");
  let inj = document.getElementById("injured").value;
  let result = document.getElementById("result");
 
  let build = "";
  let ct = 0;


  for(let i = 0; i < data.length; i+=1){
    let car = data[i];
    if(car.number_of_persons_injured == inj){
     build += `<div class="fitted card">
                <h3>${car.on_street_name}</h3>
                 <hr>
                 <p># Date: ${car.crash_date}</p>
                 <p># Time: ${car.crash_time}</p>
                 <p># Injured: ${car.number_of_persons_injured}</p>
                 <hr>
                 <p># Contributing factor: ${car.contributing_factor_vehicle_1}</p>
                 <hr>
                 <p># Vehicle Type: ${car.vehicle_type_code1}</p>
              </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}
// Challenge 4: Create an event handler (function) to filter the 311 Service Request by complaint type.
function filterByDate(){
  let output = document.getElementById("output");
  let date = document.getElementById("date").value;
  let result = document.getElementById("result");
 
  let build = "";
  let ct = 0;


  for(let i = 0; i < data.length; i+=1){
    let car = data[i];
    if(car.crash_date == date){
     build += `<div class="fitted card">
                <h3>${car.on_street_name}</h3>
                 <hr>
                 <p># Date: ${car.crash_date}</p>
                 <p># Time: ${car.crash_time}</p>
                 <p># Injured: ${car.number_of_persons_injured}</p>
                 <hr>
                 <p># Contributing factor: ${car.contributing_factor_vehicle_1}</p>
                 <hr>
                 <p># Vehicle Type: ${car.vehicle_type_code1}</p>
              </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}


//============================================================================================================================================================
function filterByMP(){
  let output = document.getElementById("output");
  let model = document.getElementById("model").value;
  let injured = document.getElementById("injured").value;
  let result = document.getElementById("result");
  console.log("Model" + model);
 
  let build = "";
  let ct = 0;


  for(let i = 0; i < data.length; i+=1){
    let car = data[i];
    if(car.vehicle_type_code1 == model && car.number_of_persons_injured == injured){
     build += `<div class="fitted card">
                <h3>${car.on_street_name}</h3>
                 <hr>
                 <p># Date: ${car.crash_date}</p>
                 <p># Time: ${car.crash_time}</p>
                 <p># Injured: ${car.number_of_persons_injured}</p>
                 <hr>
                 <p># Contributing factor: ${car.contributing_factor_vehicle_1}</p>
                 <hr>
                 <p># Vehicle Type: ${car.vehicle_type_code1}</p>
              </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}
















function accidentsByBorough(){
  //Variables to keep count of accidents by borough
  let q = 0, bk = 0, bx = 0, m = 0, s = 0;

  //Tallying the count of accidents by borough
  for(let i = 0; i < data.length; i++){
    let accident = data[i];
    if(accident.borough == "QUEENS"){
      q++;
    }else if(accident.borough == "MANHATTAN"){
      m++;
    }else if(accident.borough == "BROOKLYN"){
      bk++;
    }else if(accident.borough == "BRONX"){
      bx++;
    }else if(accident.borough == "STATEN ISLAND"){
      s++;
    }
  }

  //Creating data for chart (as array of arrays) with 1st position of array being label
  let chartData = [
    ["QUEENS",q],
    ["MANHATTAN",m],
    ["BROOKLYN", bk],
    ["BRONX", bx],
    ["STATEN ISLAND", s]
  ];

  //Retrieving chart type from user's selection of drop-down
  let chartType = get("chartType").value;  
  
  //Generate and display chart
  displayChart(chartData,"chart",chartType)
}
