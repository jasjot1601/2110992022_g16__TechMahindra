// data=[2,9,16,42,71]
// function multiply(x){
//     return x*2
// }
// function divide(x){
//     return x/2
// }
// function add(x){
//     return x+10
// }

// const caldoubledata=function (data,j){
//     var output=[];
//     for(let i=0;i<data.length;i++){
//         output.push(j(data[i]))
//     }
//     return output
// }
// console.log(caldoubledata(data,divide))


//Polyfill of Map Feature of JS
// By Using Prototype
// Array.prototype.mapp=function(logic){
//     var output=[];
//     for(let i=0;i<this.length;i++){
//         output.push(logic(this[i]));
//     }
//     return output;
// }
// function diameter(r){
//     return r*2;
// }
// function circumfrence(r){
//     return 3.14*r*2;
// }
// function area(r){
//     return 3.14*r*r;
// }



// const ans=data.map(diameter);
// const ans1=data.map(circumfrence);
// const ans2=data.map(area);

// data=[1,2,3,4,5,6,7,8,9]

// function check(i){
//     if(i%2!=0){
//         return i;
//     }
    
// }
// const oddnum=function(data){
//     var output=[]
//     for(let i=0;i<data.length;i++){
//         if(data[i]%2!=0){
//             output.push(data[i])
//         }
//     }
//     return output
// }

// Array.prototype.fillterrr=function(logic){
//     var output=[]
//     for(let i=0;i<this.length;i++){
//         output.push(logic(this[i]));
//     }
//     return output;
// }


// console.log(data.filter(check))
// console.log(oddnum(data));


const user=[
    {firstName:"Pratiyush", lastName:"Ray",age:25},
    {firstName:"Piyush", lastName:"Saini",age:22},
    {firstName:"Sahil", lastName:"Aggarwal",age:20},
    {firstName:"Ayush", lastName:"Jawa",age:28},
    {firstName:"Daksh", lastName:"Singh",age:40},

]
const Fullname=user.map((user)=>user.firstName+" "+ user.lastName);
console.log(Fullname)
