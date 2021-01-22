// https://github.com/alamindevms/assignment-js

// kilometerToMeter function
function kilometerToMeter (kilo){
   var meter = 0;

   if (kilo < 0) {
      return 'Give a possitive number!';
   }else{
      meter = kilo * 1000;
   
      return meter;
   }

}
// console.log(kilometerToMeter(1));

// budgetCalculator function
function budgetCalculator (watch , mobile , laptop){
   
   var watchPrice = watch * 50;
   var mobilePrice = mobile * 100;
   var laptopPrice = laptop * 500;

   var totalBudget = 0;

   if (watch < 0 || mobile < 0 || laptop < 0) {
      return 'Invalid Number!';
   }else{
      totalBudget = watchPrice + mobilePrice + laptopPrice;
   }
   
   return totalBudget;

}
// console.log(budgetCalculator(10 , 10 , 10));

// hotelCost function
function hotelCost (days){
   var totalCost = 0;

   if (days <= 0) { 
      return 'Invalid Number!';
   }
   else if (days <= 10) {
      totalCost = days * 100;
   }
   else if (days <= 20){
      var firstTenDays = 10 * 100;
      var remaining = days - 10;
      var secondTenDays = remaining * 80 ;
      totalCost = secondTenDays + firstTenDays;
   }
   else if (days > 20){
      var firstTenDays = 10 * 100;
      var secondTenDays = 10 * 80;
      var remaining = days - 20;
      var lastAllDays = remaining * 50 ;
      totalCost = firstTenDays + secondTenDays + lastAllDays;
   }

   return totalCost;
}
// console.log(hotelCost(200));

// megaFriend function 
var friends = ['Al Amin Hossain' , 'Mohammad Jamal Uddin' , 'Kamal Hossain Mozumdar' , 'Salam'];

function megaFriend (friends){
   var max = friends[0];
   for (let i = 0; i < friends.length; i++) {
      var element = friends[i];
      if (element.length > max.length) {
         max = element;
      }
   }

   return max;
}

// console.log(megaFriend(friends));
