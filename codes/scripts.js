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


  var adminCheckBox = document.getElementById("adminCheck");
  var objLogins = [
    { userID: 0, username: "admin@email.com", password: "password123", firstname: "Admin", lastname: "of Top Commerce", isAdmin: true},
    { userID: 1, username: "uyenvy521@gmail.com", password: "jaden123", firstname: "Uyenvy", lastname: "Nguyen", isAdmin: false}
  ];

  var numUsers = 0;
  

var registeredUsers = [];
    var blankUser = {
      id: null,
      username: "None",
      password: "None",
      firstname: "None",
      lastname: "None",
      isAdmin: false
    }

    function loadUsers() {
      var i;
      var userPopulation = document.getElementById('userList');
      if (objLogins == undefined) {
        userPopulation.innerHTML = "There are no registered users on Top Commerce.";
      }
      else {
        for (i = -1; i != objLogins.length + 1; i++) {
          userPopulation.innerHTML = (document.getElementById('userList').innerHTML = JSON.stringify(objLogins[i]) + "<br/>");
        }
      }
    
    }

function deleteUser() {
  var delFunct = prompt("Please enter the user ID number that you wish to delete.");
  if (isNaN(delFunct)) {
    window.alert("That was not a valid user ID number. Please try again.");
  }
  else {
    objLogins.splice(delFunct, 1);
  }
}
    

  function registerForm() {
    window.alert("Thank you for signing up! You may now login with your new credentials.");

    document.getElementById('aForm').style.display = "none";

  const newUserFields = document.getElementById('signup-form').getElementsByTagName('input');

  const newRegister = {
    id: Number(objLogins.length),
    username: newUserFields['email2'].value,
    password: newUserFields['psw2'].value,
    firstname: newUserFields['firstname'].value,
    lastname: newUserFields['lastname'].value,
    isAdmin: newUserFields['adminCheck'].checked
  };
 
    objLogins.push(newRegister);

    return false;
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

    var index = -1;

    for (i=0; i < objLogins.length && !loginCheck; i++) {
      if (username == objLogins[i].username && password == objLogins[i].password) {
        if (objLogins[i].isAdmin) {
          window.alert("Admin login successful.");
          adminRights = true;
        }
        else {
          window.alert("Login successful.");
        }
      index = i;
      loginCheck = true;
      }
    }

    if (adminRights == true) {
      document.getElementById('stockList').style.display = "block";
    }

    if (loginCheck == true) {
     document.getElementById('loginName').style.display = "none";
      document.getElementById("logoutName").style.display = "inline-block";
      document.getElementById('myForm').style.display = "none";
      document.getElementById('profileLink').style.display = "inline-block";

      document.getElementById('firstNameDisplay').innerHTML = objLogins[index].firstname;
      document.getElementById('lastNameDisplay').innerHTML = objLogins[index].lastname;
    }
    else if (username == "" || password == "") {
      window.alert("Login fields cannot be blank!");
    }
    else {
      window.alert("Login unsuccessful.");
    }

  }

  function logoutFunction() {
    adminRights = false;
    loginCheck = false;
    document.getElementById('stockList').style.display = "none";
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

function plusBananas() {
  var productElement = document.getElementById('quantityBananas');
  var value = productElement.innerHTML;
  var totalCount = document.getElementById('totalAmount');
  var totalCounter = Number(totalCount.innerHTML);
  
  totalCounter++;
  value++;
  document.getElementById('quantityBananas').innerHTML = Number(value);
  document.getElementById('totalAmount').innerHTML = Number(totalCounter);
}

function minusBananas() {
  var productElement = document.getElementById('quantityBananas');
  var value = productElement.innerHTML;
  var totalCount = document.getElementById('totalAmount');
  var totalCounter = Number(totalCount.innerHTML);

  if (value <= 0) {
    value = 0;
  }
  else {
    totalCounter--;
    value--;
  }
  if (totalCounter < 0) {
    totalCounter = 0;
  }

  document.getElementById('quantityBananas').innerHTML = Number(value);
  document.getElementById('totalAmount').innerHTML = Number(totalCounter);
}

function plusApples() {
  var productElement = document.getElementById('quantityApples');
  var value = productElement.innerHTML;
  var totalCount = document.getElementById('totalAmount');
  var totalCounter = Number(totalCount.innerHTML);

  totalCounter+=2;
  value++;
  
  document.getElementById('quantityApples').innerHTML = Number(value);
  document.getElementById('totalAmount').innerHTML = Number(totalCounter);
}

function minusApples() {
  var productElement = document.getElementById('quantityApples');
  var value = productElement.innerHTML;
  var totalCount = document.getElementById('totalAmount');
  var totalCounter = Number(totalCount.innerHTML);

  if (value <= 0) {
    value = 0;
  }
  else {
    totalCounter-=2;
     value--;
  }
  if (totalCounter < 0) {
    totalCounter = 0;
  }

  document.getElementById('quantityApples').innerHTML = Number(value);
  document.getElementById('totalAmount').innerHTML = Number(totalCounter);
}

function plusShirtAs() {
  var productElement = document.getElementById('quantityShirtAs');
  var value = productElement.innerHTML;
  var totalCount = document.getElementById('totalAmount');
  var totalCounter = Number(totalCount.innerHTML);

  totalCounter+=10;
  value++;
  document.getElementById('quantityShirtAs').innerHTML = Number(value);
  document.getElementById('totalAmount').innerHTML = totalCounter;
}

function minusShirtAs() {
  var productElement = document.getElementById('quantityShirtAs');
  var value = productElement.innerHTML;
  var paymentTotalElement = document.getElementById('totalAmount');
  var paymentTotal = Number(paymentTotalElement.innerHTML);

  if (value <= 0) {
    value = 0;
  }
  else {
    paymentTotal-=10;
    value--;
  }
  if (paymentTotal < 0) {
    paymentTotal = 0;
  }
  
  document.getElementById('quantityShirtAs').innerHTML = Number(value);
  document.getElementById('totalAmount').innerHTML = paymentTotal;
}

let orders = [];

var numOrder=0;



function payment() {
  if (loginCheck == false) {
    alert("You are not logged in. You must have an account to place an order.");
  }
  else if (loginCheck == true) {
    purchase();
  }
}

function purchase() {
  var numBananas = Number(document.getElementById('quantityBananas'));
  var numApples = Number(document.getElementById('quantityApples'));
  var numShirtAs = Number(document.getElementById('quantityShirtAs'));
  var totalCounter = Number(document.getElementById('totalAmount'));

  var cardholdername = document.forms['payType']['cardholder-name'].value;
  var cardnumber =  document.forms['payType']['card-number'].value;
  var expMonth = document.forms['payType']['month'].value;
  var expYear = document.forms['payType']['year'].value;
  var cvv = document.forms['payType']['cvv'].value;

  /*let cardNameCheck = cardholdername;
  let cardNumCheck = cardnumber;
  let exMonthCheck = expMonth;
  let exYearCheck = expYear;
  let cvvCheck = cvv;

  var qBananas = Number(quantityBananas);
  var qApples = Number(quantityApples);
  var qShirtAs = Number(numShirtAs);
  
  if (cardNameCheck == "") {
    alert("One or more payment fields are blank. Please fill out the required fields.");
    return false;
  }*/
  if (cardholdername == "" || cardnumber == "" || expMonth == "" || expYear == "" || cvv == "") {
    alert("One or more payment fields are blank! Please fill out all fields.");
  }
  else if (numBananas == 0) {
    alert("You are not purchasing anything. Please select your items to purchase.");
    return false;
  }
  else {
    window.alert("Thank you for purchase! You can check your order history under Profile.");
    
    let orderList = [
      {
        orderIndex: numOrder,
        item1: "Dole Bananas",
        quantityBananas: Number(numBananas),
        item2: "Gala Apples",
        quantityApples: Number(numApples),
        item3: "Shirt Type A",
        quantityShirtTypeAs: Number(numShirtAs),
        total: "$" + Number(totalCounter)
      }
    ];
    orders.push(orderList);

    if (numOrder == 0) {
       document.getElementById('orderHistory').innerHTML =JSON.stringify(orders[numOrder]) + "<br/>";
       document.getElementById('viewOrderHistory').innerHTML =JSON.stringify(orders[numOrder]) + "<br/>";
    } else {
      var addition = document.getElementById('orderHistory');
      addition.innerHTML += (document.getElementById('orderHistory').innerHTML =JSON.stringify(orders[numOrder]) + "<br/>");
      var additionAdmin = document.getElementById('viewOrderHistory');
      additionAdmin.innerHTML += (document.getElementById('viewOrderHistory').innerHTML =JSON.stringify(orders[numOrder]) + "<br/>");
    }
   cartClose();
   clearCart();
   numOrder++;
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
  if (adminRights == true) {
    document.getElementById('profileAdmin').style.display = "none";
  }
  else {
    document.getElementById('profileNormal').style.display = "none";
  }
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

function contactSubmit() {
  var name = document.forms['contactUs']['nameContact'].value;
  var email = document.forms['contactUs']['emailContact'].value;
  var phone = document.forms['contactUs']['phoneContact'].value;
  var msg = document.forms['contactUs']['msgContact'].value;

  if (name == "" || email == ""|| phone ==""|| msg == "") {
    window.alert("One or more required fields in the Contact form is missing!");
    return false;
  }
  else {
    window.alert("Contact form received.");

    document.getElementById('contactFormAll').style.display = "none";
    document.getElementById('contactMessageDisplay').style.display = "block";
  }
}

var item1Vis = true;
var item2Vis = true;
var item3Vis = true;

function hideBananas() {
  if (item1Vis == true) {
    document.getElementById('item1').style.display = "none";
    document.getElementById('invBananas').style.display = "none"
    item1Vis = false;
  }
  else {
    document.getElementById('item1').style.display = "block";
    document.getElementById('invBananas').style.display = "block"
    item1Vis = true;
  }
}

function hideApples() {
  if (item2Vis == true) {
    document.getElementById('item2').style.display = "none";
    document.getElementById('invApple').style.display = "none"
    item2Vis = false;
  }
  else {
    document.getElementById('item2').style.display = "block";
    document.getElementById('invApple').style.display = "block"
    item2Vis = true;
  }
}

function hideShirtAs() {
  if (item3Vis == true) {
    document.getElementById('item3').style.display = "none";
    document.getElementById('invShirt').style.display = "none"
    item3Vis = false;
  }
  else {
    document.getElementById('item3').style.display = "block";
    document.getElementById('invShirt').style.display = "block"
    item3Vis = true;
  }
}