

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

  
  