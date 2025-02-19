//Reduce

//sum of array


// const arr=[5,7,3,1,8];
// // var sumofArr=0;
// // for(let i=0;i<arr.length;i++){
// //     sumofArr+=arr[i];
// // }
// // console.log(sumofArr);

// const and=arr.reduce(function(acc,curr){
//     acc=acc+curr;
//     return acc;
// },0)

// console.log(and);

// const user=[
//     {firstName:"Pratiyush", lastName:"Ray",age:25},
//     {firstName:"Piyush", lastName:"Saini",age:22},
//     {firstName:"Sahil", lastName:"Aggarwal",age:22},
//     {firstName:"Ayush", lastName:"Jawa",age:22},
//     {firstName:"Daksh", lastName:"Singh",age:40},
//     {firstName:"Agamjot", lastName:"Singh",age:26},

// ]

// let ans=user.reduce(function(acc,curr){
//     if(!acc[curr.age]){
//         acc[curr.age]=1;
//     }else{
//         acc[curr.age]++;
//     }
//     return acc;
// },{})
// console.log(ans);

// datamap=[2,8,4,1,9,10]
// let ans=datamap.reduce(function(acc,curr){
//     if(curr>acc){
//         acc=curr;
//     }
//     return acc;
// },0)
// console.log(ans);

//Promises



// reachedRestaurant(function(){
//     console.log("I reached Eagle Mortle");
// }).then(TableFinding()).then(MenuDiscover()).then(PriceCheck()).then(StarterOrder()).then(maincourse()).then(dessert()).then(payBill())

// const myRestaurantPromise = new Promise(resolve, reject){
//     if(1:30<time<2:30){
//         resolve("Yes i successfully reached");
//     }
//     else{
//         reject("Cant reach at time");
//     }
// }
// const gitHubData =fetch("https://api.github.com");
// console.log(gitHubData)
// setTimeout(() => {
//     console.log(gitHubData);
// }, 2000);

//console.log(githubData)

// const cart=["shoes","watches","bags","glasses","shirts"];

// createOrder(cart,callback){
//     console.log("Order created")
//     orderPayment(orderId,callback){
//         console.log("order summary")
//         orderSummary(orderId,callback){
//             console.log("Order Summary")
//             updateWallet(){
//                 console.log("Wallet Updated")
//             }
//         }
//     }
// }
const cart=["shoes","watches","bags","glasses","shirts"];
function createOrder(cart){
    const myPromise=new Promise(function(resolve,reject){
        if(cart.length>0){
            console.log("order Created Successfully")
            resolve("12345")
        }else{
            const err=new Error("Order Failed")
            reject(err.message);
        }
    });
    return myPromise;
}

function orderPayment(orderId){
    console.log("order Payment succesully",orderId);
}

function orderSummary(orderId){
    console.log("Order Summary Created",orderId);
}

function updateWallet(){
    console.log("Wallet update")
}

//console.log(createOrder(cart))

createOrder(cart)
.then(function(orderId){
    return orderPayment(orderId)
})
.then(function(orderId){
    return orderSummary(orderId)
})
.then(function(orderId){
    return updateWallet()
})
.catch(function(err){
    console.log(err.message)
})

//createOrder(cart)
// .then(orderPayment(orderId))
// .then(orderSummary(orderId))
// .then(updateWallet)