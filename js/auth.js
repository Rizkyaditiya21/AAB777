function register(username,password){

 let users = getUsers();

 if(users.find(u=>u.username===username)){
   alert("User sudah ada");
   return;
 }

 users.push({
   username,
   password,
   balance:1000
 });

 saveUsers(users);
 alert("Register sukses");
 window.location="login.html";
}

function login(username,password){

 let users = getUsers();

 let user = users.find(
  u=>u.username===username && u.password===password
 );

 if(!user){
  alert("Login gagal");
  return;
 }

 setCurrentUser(user);
 window.location="index.html";
}

function logout(){
 localStorage.removeItem("currentUser");
 window.location="login.html";
}

