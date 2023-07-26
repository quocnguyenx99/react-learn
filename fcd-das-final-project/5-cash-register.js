function checkCashRegister(price, cash, cid) {
  let currencyUnit = {
    PENNY: 1,
    NICKEL: 5,
    DIME: 10,
    QUARTER: 25,
    ONE: 100,
    FIVE: 500,
    TEN: 1000,
    TWENTY: 2000,
    "ONE HUNDRED": 10000,
  };
  let changeSum = cash * 100 - price * 100;
  let originalChaneSum = changeSum;
  let change = [];
  let status = "";
  let cidSum = 0;
  let filteredCid = cid.filter((elem) => elem[1] != 0).reverse();
  filteredCid.forEach((elem) => {
    console.log("elem", elem);
    let curr = elem[0];
    let currSum = elem[1] * 100;
    cidSum += currSum;
    let amount = 0;
    while (changeSum >= currencyUnit[curr] && currSum > 0) {
      amount += currencyUnit[curr];
      changeSum -= currencyUnit[curr];
      currSum -= currencyUnit[curr];
    }
    if (amount !== 0) {
      console.log("amount", amount);
      change.push([curr, amount / 100]);
      console.log(change);
    }
    console.log("changeSum: ", changeSum);
  });
  if (changeSum > 0) {
    status = "INSUFFICIENT_FUNDS";
    change = [];
  } else if (changeSum == 0 && originalChaneSum == cidSum) {
    status = "CLOSED";
    change = cid;
  } else {
    status = "OPEN";
  }
  return { status: status, change: change };
}

console.log(
  checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);

// const currencyUnit = {
//   PENNY: 1,
//   NICKEL: 5,
//   DIME: 10,
//   QUARTER: 25,
//   ONE: 100,
//   FIVE: 500,
//   TEN: 1000,
//   TWENTY: 2000,
//   "ONE HUNDRED": 10000,
// };
// let changeSum = cash * 100 - price * 100;
// let changeSumCheck = changeSum;
// let change = [];
// let status = "";
// let cidSum = 0;
// let filteredCid = cid.filter((elem) => elem[1] !== 0).reverse();
// filteredCid.forEach((elem) => {
//   let curr = elem[0];
//   let currSum = elem[1] * 100;
//   cidSum += currSum;
//   amount = 0;
//   while (changeSum >= currencyUnit[curr] && currSum > 0) {
//     amount += currencyUnit[curr];
//     changeSum -= currencyUnit[curr];
//     currSum -= currencyUnit[curr];
//   }
//   if (amount !== 0) {
//     change.push([curr, amount / 100]);
//     console.log(change);
//   }
// });
// if (changeSum > 0) {
//   status = "INSUFFICIENT_FUNDS";
//   change = [];
// } else if (changeSum == 0 && changeSumCheck == cidSum) {
//   status = "CLOSED";
//   change = cid;
//   console.log(change);
// } else {
//   status = "OPEN";
// }
// return { status: status, change: change };
