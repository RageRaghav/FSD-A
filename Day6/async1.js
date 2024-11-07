// sayHello =()=>{
//     console.log("Hello Function");
// }
// console.log("start")
// setTimeout(()=>{
//     console.log("First task completed");
//     setTimeout(()=>{
//         console.log("Second task completed");
//         setTimeout(()=>{
//             console.log("Third task completed");
//         },3000);
//     },2000);
// },1000);
// console.log("end");
// const myPromise = new Promise((resolve,reject)=>{
//     let success=true
//     if(success){
//         resolve("Data send success")   
//     }
//     else{
//         reject("Data failed to send")
//     }
// });
// myPromise
// .then((message) => console.log(message))
// .catch((error) => console.log("Error Fetching data" + error));
function task(message,delay){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(message);
            resolve();
        },delay);
    });
}
task("First task completed",1000)
.then(()=>task("Second task completed",2000))
.then(()=>task("Third task completed",3000));