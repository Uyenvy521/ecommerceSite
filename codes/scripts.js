function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  function signUpForm() {
    document.getElementById("aForm").style.display = "block";
  }

  function closeSignUpForm() {
    document.getElementById("aForm").style.display = "none";
  }

  /*function validateLogin() {
    var username=document.getElementById("email1").nodeValue;
    var password=document.getElementById("psw1").nodeValue;
    if (username=='admin@email.com' && password=='password123' && document.getElementById('adminCheck').checked) {
      window.alert("Admin login successful.");
    }
    else if (username=='uyenvy@gmail.com' && password=='password') {
      window.alert('Login successful.');
    }
    else {
      window.alert("Login failed.");
    }
  }*/

  let objLogins = [
    {
      username: "admin@email.com",
      password: "password123",
      firstname: "Admin",
      lastname: "of Top Commerce"
    },
    {
      username: "uyenvy@gmail.com",
      password: "password",
      firstname: "Uyenvy",
      lastname: "Nguyen"
    }
  ];

  var numUsers = 0;
  
function loadUsers() {
  localStorage.setItem("viewUsers", objLogins[numUsers]);

   updateUsers();
}

function updateUsers() {
  let userStorage = localStorage.getItem("viewUsers", objLogins[numUsers] );
  for (var i = 0; i > orders.length; i++) {
    document.getElementById('userList').innerHTML = userStorage + "<br/>";
  }
}
  

/*function loadUsers() {
  for (var i = -1; i < objLogins.length; i++) {
    if (i == -1) {
      i==0;
      document.getElementById('userList').innerHTML = document.write(JSON.stringify(objLogins[i]));
    }
    else {
      document.getElementById('userList').addition.innerText += (document.getElementById('userList').innertext =JSON.stringify(objLogins[i]) + "<br/>");
    }
  
  }
}*/

let newRegister = [];

  function registerForm() {
    window.alert("Thank you for signing up! You may now login with your new credentials.");

    newRegister = {
      username: document.getElementById('email2').value,
      password: document.getElementById('psw2').value,
      firstname: document.getElementById('firstname').value,
      lastname: document.getElementById('lastname').value
    }
 
    objLogins.push(newRegister);

    document.getElementById('aForm').style.display = "none";

    /*objLogins.push(objLogins.firstname == document.getElementById('firstname').value, objLogins.lastname == document.getElementById('lastname').value, objLogins.username == document.getElementById('email2').value, objLogins.password == document.getElementById('psw2').value);*/
    
    
  }

  let nickname = undefined;
  var nameDis = document.getElementById('nicknameNameDisplay');

  function editNickname() {
    nickname = prompt("Please enter your new nickname!", "none");
    if (nickname != null) {
      nameDis.innerHTML = nickname;
    }
  }

  var loginCheck = false;
  var adminRights = false;

  function validateLogin() {
    var username = document.getElementById("email").value;
    var password = document.getElementById("psw").value;
    var adminCheckBox = document.getElementById("adminCheck");
    var i = 0;

    for (i=0; i< objLogins.length; i++) {
      if (username == objLogins[0].username && password == objLogins[0].password && adminCheckBox.checked == true) {
        window.alert("Admin login successful.");
        loginCheck = true;
        adminRights = true;
        break;
      }
      else if (username == objLogins[i].username && password == objLogins[i].password && adminCheckBox.checked == false) {
        window.alert("Login successful.");
        loginCheck = true;
        adminRights = false;
        break;
      }
      else if (username == "" || password == "") {
        window.alert("Login fields cannot be blank!");
        loginCheck = false;
        break;
      }
    }

    if (loginCheck == true) {
     document.getElementById('loginName').style.display = "none";
      document.getElementById("logoutName").style.display = "inline-block";
      document.getElementById('myForm').style.display = "none";
      document.getElementById('profileLink').style.display = "inline-block";

      document.getElementById('firstNameDisplay').innerHTML = objLogins[i].firstname;
      document.getElementById('lastNameDisplay').innerHTML = objLogins[i].lastname;
    }
    else {

    }
  }

  function logoutFunction() {
    if (adminRights = true) {
      adminRights == false;
    }
    document.getElementById('loginName').style.display = "inline-block";
      document.getElementById("logoutName").style.display = "none";
      document.getElementById('profileLink').style.display = "none";
  }

  function cartWindow() {
    document.getElementById("cartSpace").style.display = "block";
  }

  function cartClose() {
    document.getElementById("cartSpace").style.display = "none";
  }

//initial elements for cart

/*'use strict';

const payAmountBtn = document.querySelector('#payAmount');
const decrementBtn = document.querySelectorAll('#decrement');
const quantityElem = document.querySelectorAll('#quantity');
const incrementBtn = document.querySelectorAll('#increment');
const priceElem = document.querySelectorAll('#price');
const totalElem = document.querySelector('#total');

for (let i = 0; i < incrementBtn.length; i++) {
  incrementBtn[i].addEventListener('click', function () {
    let increment = Number(this.previousElementSibling.textContent);

    increment++;

    this.previousElementSibling.textContent = increment;

    totalCalc();
  });

  decrementBtn[i].addEventListener('click', function () {
    let decrement = Number(this.nextElementSibling.textContent);

    decrement <= 1 ? 1 : decrement--;

    this.nextElementSibling.textContent = decrement;

    totalCalc();
  });
}*/

//var totalCount = 0;

function plusBananas() {
  var element = document.getElementById('quantityBananas');
  var value = element.innerHTML;
  var totalCount = document.getElementById('totalAmount');
  var totalCounter = totalCount.innerHTML;
  
  totalCounter++;
  value++;
  document.getElementById('quantityBananas').innerHTML = Number(value);
  document.getElementById('totalAmount').innerHTML = Number(totalCounter);
}

function minusBananas() {
  var element = document.getElementById('quantityBananas');
  var value = element.innerHTML;
  var totalCount = document.getElementById('totalAmount');
  var totalCounter = totalCount.innerHTML;

  totalCounter--;
  value--;
  if (value < 0) {
    value = 0;
  }
  if (totalCounter < 0) {
    totalCounter = 0;
  }
  document.getElementById('quantityBananas').innerHTML = Number(value);
  document.getElementById('totalAmount').innerHTML = Number(totalCounter);
}

function plusApples() {
  var element = document.getElementById('quantityApples');
  var value = element.innerHTML;
  var totalCount = document.getElementById('totalAmount');
  var totalCounter = totalCount.innerHTML;

  totalCounter+=2;
  value++;
  
  document.getElementById('quantityApples').innerHTML = Number(value);
  document.getElementById('totalAmount').innerHTML = Number(totalCounter);
}

function minusApples() {
  var element = document.getElementById('quantityApples');
  var value = element.innerHTML;
  var totalCount = document.getElementById('totalAmount');
  var totalCounter = totalCount.innerHTML;

  totalCounter-=2;
  value--;
  if (value < 0) {
    value = 0;
  }
  if (totalCounter < 0) {
    totalCounter = 0;
  }
  document.getElementById('quantityApples').innerHTML = Number(value);
  document.getElementById('totalAmount').innerHTML = Number(totalCounter);
}

function plusShirtAs() {
  var element = document.getElementById('quantityShirtAs');
  var value = element.innerHTML;
  var totalCount = document.getElementById('totalAmount');
  var totalCounter = totalCount.innerHTML;

  totalCounter+=10;
  value++;
  document.getElementById('quantityShirtAs').innerHTML = Number(value);
  document.getElementById('totalAmount').innerHTML = totalCounter;
}

function minusShirtAs() {
  var element = document.getElementById('quantityShirtAs');
  var value = element.innerHTML;
  var totalCount = document.getElementById('totalAmount');
  var totalCounter = totalCount.innerHTML;

  totalCounter-=10;
  value--;
  if (value < 0) {
    value = 0;
  }
  if (totalCounter < 0) {
    totalCounter = 0;
  }
  document.getElementById('quantityShirtAs').innerHTML = Number(value);
  document.getElementById('totalAmount').innerHTML = totalCounter;
}

let orders = [];

var numOrder=0;

let numBananas = document.getElementById('quantityBananas');
  let numApples = document.getElementById('quantityApples');
  let numShirtAs = document.getElementById('quantityShirtAs');
  let totalCounter = document.getElementById('totalAmount');

  let cardholdername = document.getElementById('cardholder-name');
  let cardnumber = document.getElementById('card-number');
  let expiry = document.getElementById('expire-date');
  let cvv = document.getElementById('cvv');

function payment() {
  if (loginCheck == false) {
    alert("You are not logged in. You must have an account to place an order.");
  }
  else if (loginCheck == true) {
    purchase();
  }
}

function purchase() {
  /*if (totalCounter !== null && totalCounter.value === "") {
    window.alert("You are not paying for any items. Please enter a quantity of items you'd like to purchase.");
  }
  else*/ if (cardholdername !== null && cardholdername.value === "") {
    alert("One or more payment fields are blank. Please fill out the required fields.");
  }
  else {
    window.alert("Thank you for purchase! You can check your order history under Profile.");
    
    let orderList = [
      {
        orderIndex: numOrder,
        item1: "Dole Bananas",
        quantity: parseInt(numBananas),
        item2: "Gala Apples",
        quantity: numApples,
        item3: "Shirt Type A",
        quantity: numShirtAs,
        total: "$" + totalCounter
      }
    ];
    orders.push(orderList);
    /*if (numBananas != 0 || numApples != 0 || numShirtAs != 0) {
      
    }
    if (numBananas != 0) {
      orders.push(orders[numOrder].item = "Dole Bananas", orders[numOrder].quantity = numBananas);
    }
    if (numApples != 0) {
      orders.push(orders[numOrder].item = "Gala Apples", orders[numOrder].quantity = numApples);
    }
    if (numShirtAs != 0) {
      orders.push(orders[numOrder].item = "Shirt Type A", orders[numOrder].quantity = numShirtAs);
    }
    if (totalCounter != 0) {
      orders.push(orders[numOrder].total = totalCounter);
    }*/

    if (numOrder == 0) {
       document.getElementById('orderHistory').innerHTML =JSON.stringify(orders[numOrder]) + "<br/>";
    } else {
      var addition = document.getElementById('orderHistory');
      addition.innerHTML += (document.getElementById('orderHistory').innerHTML =JSON.stringify(orders[numOrder]) + "<br/>");
    }
   cartClose();
   clearCart();
   numOrder++;
   localStorage.setItem("viewOrder", orderList[numOrder]);

   updateOrderHistory();
  }
}

function updateOrderHistory() {
  let orderStorage = localStorage.getItem("viewOrder", orderList[numOrder] );
  for (var i = 0; i > orders.length; i++) {
    document.getElementById('viewOrderHistory').innerHTML = orderStorage + "<br/>";
  }
}


function profileFunction() {
  document.getElementById('profilePop').style.display = "block";

  if (adminRights == true) {
    document.getElementById('profileAdmin').style.display = "block";
  }
  else {
    document.getElementById('profileNormal').style.display = "block";
  }
}

function profileClose() {
  document.getElementById("profilePop").style.display = "none";
}


function orderHistory() {
  document.write(JSON.stringify(orders));
}

function payPal() {
  window.alert("Paypal is not available at this time.");
}

function clearCart() {
  document.getElementById('quantityBananas').innerHTML = 0;
  document.getElementById('quantityApples').innerHTML = 0;
  document.getElementById('quantityShirtAs').innerHTML = 0;
  document.getElementById('totalAmount').innerHTML = 0;
}