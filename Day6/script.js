// let ar = [1,2,3,4,5,6,10]
const students =[
    {
    name:'Alice',
    score:60
},{
    name:'Bob',
    score:64
},{
    name:'Rahul',
    score:50
},{
    name:'Rajesh',
    score:54
}
]
// // // let newar= ar.map((x)=>x*2);
// // // console.log(newar)
// newar2 = ar.filter((x)=>x%2==0);
// // console.log(newar)
const totalscore = students.filter((students)=>students.score>60).map((students)=>students.score*2).reduce((x,y)=>x+y,0);
console.log(totalscore)