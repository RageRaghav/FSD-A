var name="admin";
var password="admin";
function authenticate(){
   n=document.getElementById("un").value;
   p=document.getElementById("yt").value;
   let p=document.getElementById("pi")

   if(n==name && p==password){
      alert("Logged in successfully")
      pi.innertext="hello";
   }
   else  {                     
   pi.innertext="faltu insan"
      alert("login is unsuccessfull")
   }
}