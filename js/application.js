var updateSub = function (ele) {
  var cost = $(ele).children().first().next().text(); // assigns a var cost to price elements
    var quant = $(ele).children().first().next().next().text(); // assigns a var quant to the quantity elements

    var subTotal = cost * quant; // calculating the subtotal

    $(ele).children('.subtotal').html(subTotal); // injecting subtotal into the HTML

    return subTotal;
}

var updateTotalPrice = function () {
  var totalPrice = 0;
  $('tbody tr').each(function (i, ele) {
    var subTotal = updateSub(ele);
    totalPrice += subTotal;
  });
  $('#total-price').html(totalPrice);
  return totalPrice;
}
  

// ready function
$(document).ready(function () {
  // gets all the tr elements that are in tbody. 
  // in html these are all the rows of products
  $('tbody tr').each(function (i, ele) {
    
    
    var subTotal = updateSub(ele); // call the updateSub function and assign that value to subtotal in each row

    console.log(totalPrice)

  });
});

