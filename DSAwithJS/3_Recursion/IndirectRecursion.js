let totalMoney = 100;
let totalApple = 0;

function buyApple(x){
    if(x>0){
        console.log("I have "+ x + "RS and "+ totalApple + "apple" );
        buyMore(x)
    } else {
        console.log("I don't have money",totalApple);
    }
}

function buyMore(x){
    totalApple++
    buyApple(x-10)
}

buyMore(totalMoney)