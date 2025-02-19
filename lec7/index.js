// function a(){
//     console.log("first")
// }
// function b(a){
//     console.log("second")
//     a();
// }
// b(a);
// function counter(){
//     let count=0;

// }
// const element =document.getElementById("btn-1")
// element.addEventListener("click",function(){
//     
//     console.log("clicked");
// })
// const el =document.getElementById("btn-2")
// el.addEventListener("click",function(){
//     count++;
//     console.log("clicked");
// })
function reachedrestaurant(callback){
    console.log("reached")
    setTimeout(callback,1000);
}
function findtable(callback){
    console.log("table find")
    setTimeout(callback,1000);
}
function menusearch(callback){
    console.log("menu read")
    setTimeout(callback,1000);
}
function pricesearch(callback){
    console.log("prince check")
    setTimeout(callback,1000);
}
function starters(callback){
    console.log("order starter")
    setTimeout(callback,1000);
}
function maincourse(callback){
    console.log("order maincourse")
    setTimeout(callback,1000);
}
function dessert(callback){
    console.log("order dessert")
    setTimeout(callback,1000);
}
function paybill(callback){
    console.log("pay bil")
    setTimeout(callback,1000);
}

//chaining callback
// reachedrestaurant(findtable())
// findtable(menusearch())
// menusearch(pricesearch())
// pricesearch(starters())
// starters(maincourse())
// maincourse(dessert())
// dessert(paybill())


//reachedrestaurant(findtable(menusearch(pricesearch(starters(maincourse(dessert(paybill)))))))

reachedrestaurant(()=>{
    findtable(()=>{
        menusearch(()=>{
            pricesearch(()=>{
                starters(()=>{
                    maincourse(()=>{
                        dessert(()=>{
                            paybill();
                        })
                    })
                })
            })  
        })
    })
})