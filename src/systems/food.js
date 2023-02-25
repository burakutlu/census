// Three types of food: vegetables, fruit, and meat.


// Product amount is calculated every turn
function vegetableProduce(workerArr, techLevel) {
  // Todo a system to level up the workers
  let totalProduce = 0;
  for (const worker of workerArr) {
    totalProduce += worker.level * 1.25;
  }
  return totalProduce + techLevel * 2;
}

function fruitProduce(workerArr, techLevel) {
  let totalProduce = 0;
  for (const worker of workerArr) {
    totalProduce += worker.level * 1.15;
  }
  return totalProduce + techLevel * 2.5;
}

function meatProduction(workerArr, techLevel) {
  let totalProduce = 0;
  for (const worker of workerArr) {
    totalProduce += worker.level * 1.75;
  }
  return totalProduce + techLevel * 4;
}

// There are two unique means of storage: vegetables & fruit, meat separately

function vegFruitStore(buildingLevel, storageAmount, productionAmount) {
  let storageMaxAmount = buildingLevel * 40;
  if (productionAmount + storageAmount > storageMaxAmount) {
    storageAmount = buildingLevel * 30; // max storage value
  } else if (productionAmount + storageAmount <= storageMaxAmount) {
    storageAmount += productionAmount;
  }
  return storageAmount;
}

function meatStore(buildingLevel, storageAmount, productionAmount) {
  let storageMaxAmount = buildingLevel * 30;
  if (productionAmount + storageAmount > storageMaxAmount) {
    storageAmount = buildingLevel * 30; // max storage value
  } else if (productionAmount + storageAmount <= storageMaxAmount) {
    storageAmount += productionAmount;
  }
  return storageAmount;
}

// Consumption of the food

function vegFruitConsume(vegFruit, adultCount, childCount) {
  let adultCons = adultCount * 2;
  let childCons = childCount * 1.25;
  return vegFruitStore(vegFruit - (adultCons + childCons));
}

function meatConsume(meat, adultCount, childCount) {
  let adultCons = adultCount * 1;
  let childCons = childCount * 0.5;
  return meatStore(meat - (adultCons + childCons));
}
