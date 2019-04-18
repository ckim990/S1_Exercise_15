"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Tutorial Case

   Payment Form Script
   
    Author: Christopher Kim
    Date:   4.11.19
   
   Filename: co_payment.js
   
   Function List
   =============
   
   runSubmit()
      Runs validation tests when the submit button is clicked
      
   validateCVC()
      Validates the credit card CVC number
      
   validateMonth()
      Validates that the user has selected the expiration month of the credit card
      
   validateYear()
      Validates that the user has selected the expiration year of the credit card
      
   validateNumber()
      Validates that the user has entered a valid and legitimate card number
      
   validateCredit()
      Validates that the user has selected a credit card type
      
   validateName()
      Validates that the user has specified the name on the credit card
      
   sumDigits(numStr)
      Sums the digits characters in a text string
      
   luhn(idNum)
      Returns true of idNum satisfies the Luhn Algorithm

*/

window.addEventListener("load", function () {

      // Retrieve the field/value pairs from the URL.
      var formData = location.search.slice(1);
      formData = formData.replace(/\+/g, " ");
      formData = decodeURIComponent(formData);
      var formField = formData.split(/[&=]/g);

      // Write the field values to the order form.
      document.forms.order.elements.orderDate.value = formField[1];
      document.forms.order.elements.modelName.value = formField[5];
      document.forms.order.elements.qty.value = formField[7];
      document.forms.order.elements.protectionName.value = formField[9];
      document.forms.order.elements.protectionCost.value = formField[13];
      document.forms.order.elements.subtotal.value = formField[15];
      document.forms.order.elements.salesTax.value = formField[19];
      document.forms.order.elements.totalCost.value = formField[21];
});

window.addEventListener("load", function () {

      document.getElementById("subButton").onclick = runSubmit;
      document.getElementById("cardName").oninput = validateName;
      document.getElementById("expMonth").onchange = validateMonth;
      document.getElementById("expYear").onchange = validateYear;
      document.getElementById("cvc").oninput = validateCVC;


});

function runSubmit() {

      validateName();
      validateCredit();
      validateNumber();
      validateMonth();
      validateYear();
      validateCVC();

}

function validateCVC() {

      var cardCVC = document.getElementById("cvc");

      var creditCard = document.querySelector("input[name='credit']:checked").value;

      if (cardCVC.validity.valueMissing) {

            cardCVC.setCustomValidity("Enter your CVC number");

      } else if ((creditCard === "amex") && (/^\d{4}$/.test(cardCVC.value) === false)) {

            cardCVC.setCustomValidity("Enter a   4-digit CVC number");

      } else if ((creditCard === "amex") && (/^\d{3}$/.test(cardCVC.value) === false)) {

            cardCVC.setCustomValidity("Enter a 3-digit CVC number");

      } else {
            cardCVC.setCustomValidity("");

      }

}

function validateMonth() {

      var cardMonth = document.getElementById("expMonth");

      if (cardMonth.selectedIndex === 0) {

            cardMonth.setCustomValidity("Select the expiration month");

      } else {

            cardMonth.setCustomValidity("");

      }

}

function validateMonth() {

      var cardYear = document.getElementById("expYear");

      if (cardYear.selectedIndex === 0) {

            cardYear.setCustomValidity("Select the expiration year");

      } else {

            cardYear.setCustomValidity("");

      }

}



function validateNumber() {

      var cardNumber = document.getElementById("cardNumber");

      if (cardNumber.validity.valueMissing) {

            cardNumber.setCustomValidity("Enter your card number");

      } else if (cardNumber.validity.patternMismatch) {

            cardNumber.setCustomValidity("Enter a valid card number");

      } else if (luhn(cardNumber.value) === false) {

            cardNumber.setCustomValidity("Enter a legitimate card number");

      } else {

            cardNumber.setCustomValidity("");

      }

}

function validateCredit() {

      var creditCard = document.forms.payment.elements.credit[0];

      if (creditCard.validity.valueMissing) {

            creditCard.setCustomValidity("Select your credit card");

      } else {

            creditCard.setCustomValidity("");

      }

}


function validateName() {

      var cardName = document.getElementById("cardName");

      if (cardName.validity.valueMissing) {

            cardName.setCustomValidity("enter your name as it appears on your card");

      } else {
            cardName.setCustomValidity("");
      }

}

function sumDigits(numStr) {

      var digitTotal = 0;
      for (var i = 0; i < numStr.length; i++) {

            digitTotal += parseInt(numStr.charAt(i));

      }

      return digitTotal;

};


function luhn(idNum) {

      var string1 = "";
      var string2 = "";

      for (var i = idNum.length - 1; i >= 0; i -= 2) {
            string1 += idNum.charAt(i);
      };

      for (var i = idNum.length - 2; i >= 0; i -= 2) {
            string1 += 2 * idNum.charAt(i);
      };


      return sumDigits(string1 + string2) % 10 === 0;
}