// ================ Problem Number - 1 =====================
function radianToDegree(radian) {
  let degree = radian * 57.2958;
  return degree;
  }
  let degreeResult = 199;
  console.log(radianToDegree(degreeResult));
  //================ Problem Number - 2 =====================
  const isJavaScriptFile = 'app.js';
  const otherFile = 'js.png';
  isJavaScriptFile.endsWith('image.js.png')
  console.log(isJavaScriptFile.endsWith('.js'));
  // ================ Problem Number - 3 =====================
  function oilPrice(digel1,petrol1,octane1){
  const digel1Liter = 114;
  const petrol1Liter = 130;
  const octane1Liter = 135;
  let digel1TotalCost = digel1 * digel1Liter;
  let petro1TtotalCost = petrol1 * petrol1Liter;
  let octane1TotalCost = octane1 * octane1Liter;
  const totaloilPrice = digel1TotalCost + petro1TtotalCost + octane1TotalCost;
  return totaloilPrice;
  }
  let digel1 = 1;
  let petrol1 = 1;
  let octane1= 1;
  console.log(oilPrice(digel1,petrol1,octane1));
  // ================ Problem Number - 4 =====================
  function publicBusFare(reserveBus, microBus, publicBus);{
  const perBusperson = 50;
  const perMicroPerson = 11;
  const perPublicBusPerson = 6;
  const bus = reserveBus * perBusperson ;
  const microBus = microBus * perMicroPerson;
  const publicBus = publicBus * perPublicBusPerson;
  const totalTransport = bus + microBus + publicBus;
  return totalTransport;
  }
  console.log();
  // ================ Problem Number - 5 =====================
  function isBestFrinds (friends){
  if (friend1.Friend == friend2.name && friend2.Friend == friend1.name){
  return true
  }
  else{
  return false
  }
  }
  let friend1 = {name:'doe' , Friend:'alex'}
  let friend2 = {name: 'alex' , Friend:'doe'}
  const friends = isBestFrinds(friend1, friend2);
  console.log (isBestFrinds(friends));