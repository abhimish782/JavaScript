/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function objCreate(cat,pri){
  this.category=cat;
  this.totalSpent=pri;
}
function calculateTotalSpentByCategory(transactions) {
  let listOfCategory=[];
  for (let i=0;i<transactions.length;i++){
    let temp=transactions[i].category;
    if(!listOfCategory.includes(temp)){
      listOfCategory.push(temp);
    }
  }
  let ans=[];
  for(let  j=0;j<listOfCategory.length;j++){
    let categorys=listOfCategory[j];
    let prices=0;
    for(let k=0;k<transactions.length;k++){
      if(transactions[k].category==categorys){
        prices+=transactions[k].price;
      }
    }
    let p=new objCreate(categorys,prices);
    ans.push(p);
    
  }
  // console.log(ans);
  return ans;
}

module.exports = calculateTotalSpentByCategory;
