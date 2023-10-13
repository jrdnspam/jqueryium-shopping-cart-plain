$(document).ready(function () {
  // selectors for frequntly used elements

  var $tbody = $('tbody');
  var $addProduct = $('.add-product');
  var $addPrice = $('.add-price');
  var $addQuantity = $('.add-quantity');
  var $totalPrice = $('#total-price');
  var $btnRemove = $('.btn.remove');
  // function to update subtotal and return calculated value
  function updateSubtotal() {
    var cost = parseFloat($(this).find('.price').text());
    var quant = parseFloat($(this).find('.quantity').text());
    var subTotal = cost * quant;
    $(this).find('.subtotal').text(subTotal); // injects calculated subtotal into DOM
    return subTotal;
  }
// function to calculate and update the total sum of subtotals
  function updateTotalPrice() {
    var subtotals = []; // empty array to hold subtotals
    $tbody.find('tr').each(function () {
      subtotals.push(updateSubtotal.call(this));
    });

    var totalSum = subtotals.reduce((a, b) => a + b, 0); // reduce function to sum up subtotal array
    $totalPrice.text(totalSum); // injects total sum into DOM at the $totalPrice element
  }
  // new row event listener
  $('#add-item').on('submit', function (event) {
    event.preventDefault(); 
    var addProduct = $addProduct.val();
    var addPrice = parseFloat($addPrice.val());
    var addQuantity = parseFloat($addQuantity.val());

    if (addProduct && !isNaN(addPrice) && !isNaN(addQuantity)) {
      var subtotalValue = (addPrice * addQuantity)
      // new row HTML
      var newRow = `<tr>
        <td class="product">${addProduct}</td>
        <td class="price">${addPrice}</td>
        <td class="quantity">${addQuantity}</td>
        <td class="subtotal">${subtotalValue}</td>
        <td><button class="btn btn-warning btn-sm remove">remove</button></td>
      </tr>`;

      $tbody.append(newRow); // adds new row to last line of table

      $addProduct.val('');
      $addPrice.val('');
      $addQuantity.val(''); // resets the form field after input

      updateTotalPrice(); // calls updateTotalPrice function after button click
    }
  });
  // remove row event listener
$btnRemove.on('click', function(event) {
  $(this).closest('tr').remove();
  updateTotalPrice
})

  updateTotalPrice(); // calls updateTotalPrice function at end of document ready after eveyrthing has loaded
});