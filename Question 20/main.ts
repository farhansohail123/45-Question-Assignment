let citiesInPakistan: string[] = [
    "Karachi",
    "Lahore",
    "Islamabad",
    "Rawalpindi",
    "Faisalabad",
    "Multan",
    "Hyderabad",
    "Gujranwala",
    "Peshawar",
    "Quetta"
  ];
  
  console.log("Major Cities in Pakistan:");
  //Here we are printing by two method:
  citiesInPakistan.forEach((a) => console.log("Major city by forEach() function: ",a));
  citiesInPakistan.map((a) => console.log("Major city by map() function : ",a));