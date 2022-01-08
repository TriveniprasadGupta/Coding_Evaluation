function takeOrder(){
    event.preventDefault();
    setTimeout(function(){
        alert("Your order is accepted");
    },0);
    
    setTimeout(function(){
        alert("Your order is being prepared");
    },3000);

    setTimeout(function(){
        alert("Your order is ready");
    },8000);

    setTimeout(function(){
        alert("Order out for delivery");
    },10000);

    setTimeout(function(){
        alert("Order delivered");
        localStorage.setItem("cartData",JSON.stringify([]));
        window.location.href = "menu.html";
    },12000);
}