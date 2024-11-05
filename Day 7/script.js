async function fetchdata(){
    try{
        let response= await fetch("https://api.github.com/users?per_page=10");
        let data = await response.json();
        let h = document.getElementById('top');
        for(i=0;i<10;i++){
            let h1= document.createElement('h1');
            h1.textContent = data[i]["node_id"]
            let a= document.createElement('a');
            a.textContent = data[i]["login"]
            a.setAttribute('href', data[i]["html_url"]);
            h.appendChild(h1);
            h.appendChild(a);
        }  
    }
    catch(error ){
        console.log(error)

    }
}
