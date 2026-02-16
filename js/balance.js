function updateBalanceDisplay(){

 let user = getCurrentUser();

 if(!user){
   window.location="login.html";
 }

 document.getElementById("balance").innerText =
 "💰 "+user.balance+" coins";
}

function updateBalance(amount){

 let users = getUsers();
 let user = getCurrentUser();

 user.balance += amount;

 let index = users.findIndex(
  u=>u.username===user.username
 );

 users[index] = user;

 saveUsers(users);
 setCurrentUser(user);
}

