let url = "https://www.themealdb.com/api/json/v1/1/search.php?f=c";

let cartData = JSON.parse(localStorage.getItem("cartData")) || [];
document.querySelector("#cart").textContent = cartData.length;

fetch(url)
.then(function(response){
    response.json()
    .then(function(data){
        console.log(data.meals);
        displayMenu(data.meals);
    });
});

function displayMenu(meals){
    meals.forEach(function(element){
        let card = document.createElement("div");

        let dish_img = document.createElement("img");
        dish_img.src = element.strMealThumb;

        let dish_name = document.createElement("h3");
        dish_name.textContent = element.strMeal;

        let dish_price = document.createElement("p");
        element.price = Math.round(Math.random()*400+100);
        dish_price.textContent = "Rs. " + element.price;

        let addToCart = document.createElement("button");
        addToCart.textContent = "Add To Cart"
        addToCart.addEventListener("click",function(){
            addDish(element);
        })

        let priceCartDiv = document.createElement("div");
        priceCartDiv.append(dish_price,addToCart);
        priceCartDiv.setAttribute("class","priceCartDiv");

        card.append(dish_img,dish_name,priceCartDiv);
        document.querySelector("#menuDiv").append(card);
    });
}

function addDish(dish){
    cartData.push(dish);
    localStorage.setItem("cartData",JSON.stringify(cartData));
    document.querySelector("#cart").textContent = cartData.length;
}

function gotocart(){
    window.location.href = "cart.html";
}


