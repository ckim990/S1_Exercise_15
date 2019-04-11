"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Tutorial Case

   Order Form Script
   
    Author: Christopher Kim
    Date:   4.11.19 
   
   Filename: co_order.js
   
   Function List
   =============
   
   calcOrder()
      Calculates the cost of the customer order
      
   formatNumber(val, decimals)
      Format a numeric value, val, using the local
      numeric format to the number of decimal
      places specified by decimals
      
   formatUSACurrency(val)
      Formats val as U.S.A. currency
   
*/

window.addEventListener("load", function () {
      var orderForm = document.forms.orderForm 
      orderForm.elements.orderDate.value = new Date().toDateString();
      orderForm.elements.model.focus();
      calcOrder();
});

function calcOrder() {
      var orderForm = document.forms.orderForm;

      var mIndex = orderForm.elements.model.selectedIndex;
      var mCost = orderForm.elements.model.options[mIndex].value;
      var qIndex = orderForm.elements.qty.selectedIndex;
      var quantity = orderForm.elements.qty[qIndex].value;

      var initialCost = mCost * quantity;
      orderForm.elements.initialCost.value = initialCost;

      var pCost = document.querySelector('input[name="protection"]:checked')
      .value * quantity;
      orderForm.elements.protectionCost.value = pCost;
}


