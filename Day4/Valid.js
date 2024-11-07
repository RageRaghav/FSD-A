function validated(){
    let  n=document.getElementById("name").value;
    let  p=document.getElementById("pass").value;
      if(n.length <10 || n=="")
          return false;
      if(p.length <10 || p=="")
          return false;
     
  }