// function two(){
//     return 2;
// }
// function four(){
//     return 4;
// }
// console.log(1);
// console.log(two());
// setInterval(()=>{
//     console.log(3)
// },3000)
// console.log(four());
// setInterval(()=>{
//     console.log(4)
// },5000)
// console.log(6);
// function temp(i){
//     setTimeout(()=>{
//         console.log(i)
//     },1000)
// }
// for(var i=0;i<=6;i++){
//     temp(i);
// }
// function x(){
//     var a=7;
//     function y(){
//         console.log(a);
//     }
//     return y;
// }

// var z=x();
// console.log(z);

// z();
// function x(){
//     var a=7;
//     function y(){
//         console.log(a);
//     }
//     a=100;
//     return y;
// }

// var z=x();
// console.log(z);

// z();
// function z(){
//     var b=900;
//     function x(){
//         var a=7;
//         function y(){
//             console.log(a,b);
//         }
//         y();
//     }
//     x();
// }
// z()
// var count=0;
// function increment(){
// count++;
// }
// increment()
// increment()
// increment()
// function 
// console.log(count)
function inc(){
    var count=8;
    // function inc1(){
    //     count++;
    // }
    
    // console.log(count)
    return function inc1(){
        count--;
        console.log(count)
    }

}
var counter=inc();
counter();
counter();
counter();







