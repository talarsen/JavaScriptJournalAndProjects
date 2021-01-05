/*Use the forEach() method to loop over the array and print out the following donut summaries using console.log.*/

// donut represents a single element of donuts array
//donut is an object, therefore you can access its properties using a dot notation
var donuts = [
    { type: "Jelly", cost: 1.22 },
    { type: "Chocolate", cost: 2.45 },
    { type: "Cider", cost: 1.59 },
    { type: "Boston Cream", cost: 5.99 }
];
    donuts.forEach(function(donut) {
        console.log(donut.type + " donuts costs $" + donut.cost + " each." );
    });